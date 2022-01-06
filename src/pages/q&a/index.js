import React from "react";
import YellowBanner from "../../img/YellowBanner.png";
import { Faq } from "../../api/Faq/index";
import { useNavigate } from "react-router-dom";
import "../Introduce/introduce.css";
import "./QnA.css";
export const Question = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="BannerWrapper">
        <img className="BannerImg" src={YellowBanner} />
      </div>
      <div className="LayoutContainer">
        <div className="ContainerInner">
          <div className="TopMargin" />
          <div className="Title">자주 묻는 질문</div>
          <div className="TopMargin" />
          {Faq.map((data, id) => (
            <div
              className="QuestionWrapper"
              key={id}
              onClick={() => navigate("/qna/" + data.id)}
            >
              <div className="QuestionMark" />
              {data.question}
            </div>
          ))}
          <div className="TopMargin" />
        </div>
      </div>
    </>
  );
};

export default Question;

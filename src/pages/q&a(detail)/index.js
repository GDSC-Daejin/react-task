import React from "react";
import YellowBanner from "../../img/YellowBanner.png";
import { Faq } from "../../api/Faq/index";
import { useNavigate, useParams } from "react-router-dom";
import "../Introduce/introduce.css";
import "./q&a(detail).css";

const QnADetail = () => {
  const { id } = useParams();
  const faqData = Faq.find((data) => data.id === Number(id));
  const navigate = useNavigate();
  return (
    <>
      <div className="BannerWrapper">
        <img className="BannerImg" src={YellowBanner} />
      </div>
      <div className="TopMargin" />
      <div className="LayoutContainer">
        <div className="ContainerInner">
          <div className="BackToQna" onClick={() => navigate("/qna")}>
            질문 목록
          </div>
          <div className="QuestionTitle">{faqData?.question}</div>
          <div className="TopMargin" />
          <div className="AnswerWrapper">
            {faqData?.answer.split("\n").map((text, id) => (
              <div className="AnswerText" key={id}>
                {text}
              </div>
            ))}
          </div>
          <div className="TopMargin" />
        </div>
      </div>
    </>
  );
};

export default QnADetail;

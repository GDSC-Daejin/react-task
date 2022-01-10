import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import BlueBanner from "../../img/BlueBanner.png";
import "../Introduce/introduce.css";
import "./JoinUsTeam.css";
import { teamRecruitmentDefaultText } from "../../api/pageData/teamRecruitmentDefaultText";
import { TeamInfomation } from "../../api/pageData/teamInfomation";

const JoinUsTeam = () => {
  const { id } = useParams();
  const aboutTeam = TeamInfomation.find((aboutTeam) => aboutTeam.id === id);
  const navigate = useNavigate();
  return (
    <>
      <div className="BannerWrapper">
        <img className="BannerImg" src={BlueBanner} alt="배너" />
      </div>
      <div className="LayoutContainer">
        <div className="ContainerInner">
          <div className="TopMargin" />
          <div className="Title">{aboutTeam?.name}</div>
          <div className="TopMargin" />
          <div className="MoblieTopElementWrapper">
            <div className="JoinInner">
              <div className="ElementWrapper">
                <div className="MinTitle">소속</div>
                <div className="MinText">{aboutTeam?.name}</div>
              </div>
              <div className="ElementWrapper">
                <div className="MinTitle">합류과정</div>
                <div className="MinText">1차 서류 - 2차 면접</div>
              </div>
              <div className="ElementWrapper">
                <div className="MinTitle">활동기간</div>
                <div className="MinText">1년이상</div>
              </div>
              <div className="TopMargin" />
            </div>
          </div>
          <div className="MainText">
            열정적인 동료를 얻기 위해 이 자리에 모였습니다.
          </div>
          <div className="MainText">
            우리는 함께 고민을 나누고 도전하며 목표를 향해 달리고 있습니다.
          </div>
          <div className="TopMargin" />
          <div className="SectionWrapper">
            <div className="IntroduceWrapper">
              {aboutTeam?.activity ? (
                <>
                  <div className="SubTitle">합류하시면 함께 할 활동입니다.</div>
                  {aboutTeam.activity.split("\n").map((line, id) => {
                    return (
                      <li className="List" key={id}>
                        <div className="Tage" />
                        {line}
                      </li>
                    );
                  })}
                  <div className="TopMargin" />
                </>
              ) : null}
              <div className="SubTitle">이런 분을 찾습니다</div>
              <ul className="Ul">
                {teamRecruitmentDefaultText.findMember
                  .split("\n")
                  .map((line, id) => {
                    return (
                      <li className="List" key={id}>
                        <div className="Tage" />
                        {line}
                      </li>
                    );
                  })}
                {aboutTeam?.people != undefined
                  ? aboutTeam?.people.split("\n").map((line, id) => {
                      return (
                        <li className="List" key={id}>
                          <div className="Tage" />
                          {line}
                        </li>
                      );
                    })
                  : null}
              </ul>
              <div className="TopMargin" />
              <div className="SubTitle">이런 경험이 있다면 더 좋습니다</div>
              <ul className="Ul">
                {teamRecruitmentDefaultText.goodMember
                  .split("\n")
                  .map((line, id) => {
                    return (
                      <li className="List" key={id}>
                        <div className="Tage" />
                        {line}
                      </li>
                    );
                  })}
                {aboutTeam?.preferential != undefined
                  ? aboutTeam?.preferential.split("\n").map((line, id) => {
                      return (
                        <li className="List" key={id}>
                          <div className="Tage" />
                          {line}
                        </li>
                      );
                    })
                  : null}
              </ul>
              <div className="TopMargin" />
              <div className="SubTitle">GDSC의 혜택</div>
              <ul className="Ul">
                {teamRecruitmentDefaultText.benefits
                  .split("\n")
                  .map((line, id) => {
                    return (
                      <li className="List" key={id}>
                        <div className="Tage" />
                        {line}
                      </li>
                    );
                  })}
              </ul>
              <div className="TopMargin" />
            </div>
            <div className="JoinWrapper">
              <div className="JoinInner">
                <div className="ElementWrapper">
                  <div className="MinTitle">소속</div>
                  <div className="MinText">{aboutTeam?.name}</div>
                </div>
                <div className="ElementWrapper">
                  <div className="MinTitle">합류과정</div>
                  <div className="MinText">1차 서류 - 2차 면접 </div>
                </div>
                <div className="ElementWrapper">
                  <div className="MinTitle">활동기간</div>
                  <div className="MinText">1년이상</div>
                </div>
                <div className="TopMargin" />
                <button
                  className="StyledButton"
                  onClick={() => {
                    window.open(
                      "https://forms.gle/FwoDUZSCcHHow8iC7",
                      "_blank"
                    );
                  }}
                >
                  지원하기
                </button>
                <button
                  className="StyledButton"
                  onClick={() => {
                    navigate("/Qna");
                  }}
                >
                  자주 하는 질문
                </button>
                <div className="TopMargin" />
              </div>
            </div>
          </div>
          <div className="MoblieBottomElementWrapper">
            <button
              className="StyledButton"
              onClick={() => {
                navigate("/qna");
              }}
            >
              자주 하는 질문
            </button>
            <button
              className="StyledButton"
              onClick={() => {
                window.open("https://forms.gle/FwoDUZSCcHHow8iC7", "_blank");
              }}
            >
              지원하기
            </button>
          </div>
        </div>
      </div>
      <div className="TopMargin" />
    </>
  );
};
export default JoinUsTeam;

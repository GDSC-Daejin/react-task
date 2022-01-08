import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import BlueBanner from "../../img/BlueBanner.png"
import "../Introduce/introduce.css"

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
          <div className="MobileCategoryWrapper">
            <div className="JoinInner">
              <div className="ElementWrapper">
                <MinTitle>소속</MinTitle>
                <MinText>{aboutTeam?.name}</MinText>
              </div>
              <div className="ElementWrapper">
                <MinTitle>합류과정</MinTitle>
                <MinText>1차 서류 - 2차 면접</MinText>
              </div>
              <div className="ElementWrapper">
                <MinTitle>활동기간</MinTitle>
                <MinText>1년이상</MinText>
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
                    retrun(
                      <div className="List" key={id}>
                        <div className="Tage" />
                        {line}
                      </div>
                    );
                  })}
                  <div className="TopMargin" />
                </>
              ) : null}
              <div className="SubTitle">이런 분을 찾습니다</div>
              <div className="MainText"></div>
              {teamRecruitmentDefaultText.findMember
                .split("\n")
                .map((line, id) => {
                  return (
                    <div className="List" key={id}>
                      <div className="Tage" />
                      {line}
                    </div>
                  );
                })}
              {aboutTeam?.people != undefined
                ? aboutTeam?.people.split("\n").map((line, id) => {
                    return (
                      <div className="List" key={id}>
                        <div className="Tage" />
                        {line}
                      </div>
                    );
                  })
                : null}
            </div>
            <div className="TopMargin" />
            <div className="SubTitle">이런 경험이 있다면 더 좋습니다</div>
            <div className="MainText"></div>
            {teamRecruitmentDefaultText.goodMember
              .split("\n")
              .map((line, id) => {
                return (
                  <div className="List" key={id}>
                    <div className="Tage" />
                    {line}
                  </div>
                );
              })}
            {aboutTeam?.preferential != undefined
              ? aboutTeam?.preferential.split("\n").map((line, id) => {
                  return (
                    <div className="List" key={id}>
                      <div className="Tage" />
                      {line}
                    </div>
                  );
                })
              : null}
          </div>
          <div className="TopMargin" />
          <div className="SubTitle">GDSC의 혜택</div>
          <div className="MainText">
            {teamRecruitmentDefaultText.benefits.split("\n").map((line, id) => {
              return (
                <div className="List" key={id}>
                  <div className="Tage" />
                  {line}
                </div>
              );
            })}
          </div>
          <div className="TopMargin" />
          <div className="IntroduceWrapper" />
          <div className="JoinWrapper">
            <div className="JoinInner">
              <div className="ElementWrapper">
                <div className="MinTitle">소속</MinTitle>
                <div className="MinText">{aboutTeam?.name}</MinText>
              </div>
              <div className="ElementWrapper">
                <div className="MinTitle">합류과정</MinTitle>
                <div className="MinText">1차 서류 - 2차 면접 </MinText>
              </div>
              <div className="ElementWrapper">
                <div className="MinTitle">활동기간</MinTitle>
                <div className="Mintext">1년이상</MinText>
              </div>
              <div className="TopMargin" />
              <div className=StyledButton
                   onClick={() => {
                     window.open(
                         'https://forms.gle/FwoDUZSCcHHow8iC7',
                         '_blank',
                     );
                   }}
              >
                지원하기
            </div>
              <div className=StyledButton
                   onClick={() => {
                     window.open(
                         'https://forms.gle/FwoDUZSCcHHow8iC7',
                         '_blank',
                     );
                   }}
              >
                자주 하는 질문
          </div>
              <div className="TopMargin" />
            </div>
            </div>
        </div>
        <div className="MobileCategoryWrapper">
          <div className="StyledButton"
               onClick={() => {
            navigate('/question');
          }}
          >
            자주 하는 질문
          </div>
          <div className="StyledButton"
               onClick={() => {
                 window.open('https://forms.gle/FwoDUZSCcHHow8iC7', '_blank');
               }}
          >
            지원하기
          </div>
        </div>
        </div>
      </div>
      <div className="TopMargin" />
    </>
  );
};
export default JoinUsTeam;
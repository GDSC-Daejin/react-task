import React from "react";
import GreenBanner from "../../img/GreenBanner.png";
import "./introduce.css";
import { MemberCard } from "../../components/common/MemberCard";
import "../../components/footer";
import { Footer } from "../../components/footer";

const Introduce = () => {
  const IntroduceText =
    "GDSC(Google Developer Student Clubs)은 Google Developers에서 제공하는 프로그램으로, 대학교를 기반으로 하는 개발자 커뮤니티그룹입니다. \n" +
    "GDSC의 멤버들은 peer-to-peer 학습 환경에서 역량을 키우고 공동체와 지역사회를 위한 솔루션 구축을 목표로 합니다. \n" +
    "현재 GDSC Korea는 21명의 Lead를 주축으로 21개 대학교에 선발되었으며, 기술적 성장을 위한 교육자료를 제공하고 리더십 개발을 위한 다양한 활동들을 지원합니다. \n" +
    "학생이 성장할 수 있도록 전세계의 학생 Lead들과의 교류 기회, Google의 이벤트 참여, 현업 엔지니어와의 만남 등 다양한 기회를 제공하고 쇼케이스,워크샵을 통해 역량을 높일 수 있도록 돕습니다. ";
  return (
    <>
      <div className="StyleModal"></div>
      <div className="BannerWrapper">
        <img className="BannerImg" src={GreenBanner} />
      </div>
      <div className="LayoutContainer">
        <div className="ContainerInner">
          <div className="TopMargin" />
          <div className="App">
            <div className="Title">About us</div>
            <div className="TopMargin" />

            <div className="SubTitle">Google Developer Student Club 소개</div>
            <div>
              {IntroduceText.split("\n").map((line, id) => (
                <div className="MainText" key={id}>
                  {line}
                  <br />
                </div>
              ))}
            </div>
          </div>
          <div className="TopMargin" />
          <div className="SubTitle">합류하시면 함께할 활동입니다</div>
          <div className="MainText">
            <ul className="Ul">
              <li className="List">
                <div className="Tage" />
                GDSC 활동 중 필요한 행사를 기획하거나 관련 콘텐츠를 제작합니다.
              </li>
              <li className="List">
                <div className="Tage" />
                Google Solution Challenge, DevFest, 팀 프로젝트 등에 참여합니다.
              </li>
              <li className="List">
                <div className="Tage" />
                스터디를 개설하여 팀을 이끌거나 참여합니다.
              </li>
              <li className="List">
                <div className="Tage" />
                모르는 것을 질문하고 정보를 공유하며 활발한 커뮤니티를 만듭니다.
              </li>
            </ul>
          </div>
          <div className="TopMargin" />
          <div className="Title">팀 소개</div>
          <div className="TopMargin" />
          <div className="CardList">
            <MemberCard />
          </div>
        </div>
      </div>
      <div className="TopMargin" />
      <Footer />
    </>
  );
};

export default Introduce;

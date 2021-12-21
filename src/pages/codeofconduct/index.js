import React from "react";
import RedBanner from "../../img/RedBanner.png";
import "./CodeOfConduct.css";

export const CodeOfConduct = () => {
  return (
    <>
      <div className="BannerWrapper">
        <img className="BannerImg" src={RedBanner} />
      </div>
      <div className="LayoutContainer">
        <div className="ContainerInner">
          <div className="TopMargin" />
          <div className="App">
            <div className="Title">Code of Conduct (Google)</div>
            <div className="TopMargin" />
            <div className="SubTitle">사람을 존중해주세요.</div>
            <div className="MainText">
              <ul className="ul">
                <li className="List">
                  <div className="Tage" />
                  모든 일 뒤에는 사람이 있습니다.
                </li>
                <li className="List">
                  <div className="Tage" />
                  모두가 커뮤니티에 참여할 수 있어야합니다.
                </li>
                <li className="List">
                  <div className="Tage" />
                  다른 사람의 가치관, 문화, 일을 존중해주세요.
                </li>
              </ul>
            </div>
            <div className="TopMargin" />
            <div className="SubTitle">사람에게 친절하게 대해주세요.</div>
            <div className="MainText">
              <ul className="ul">
                <li className="List">
                  <div className="Tage" />
                  사람을 정중하게 대해주세요.
                </li>
                <li className="List">
                  <div className="Tage" />
                  새로운 사람에게 친절하게 대해주세요.
                </li>
                <li className="List">
                  <div className="Tage" />
                  어떤 질문에도 친절하게 대해주세요.
                </li>
              </ul>
            </div>
            <div className="TopMargin" />
            <div className="SubTitle">다른 사람의 이야기를 잘 들어주세요.</div>
            <div className="MainText">
              <ul className="ul">
                <li className="List">
                  <div className="Tage" />
                  모든 사람들의 의견을 잘 들어주세요.
                </li>
                <li className="List">
                  <div className="Tage" />
                  모든 사람에게는 발언권이 있고, 모두가 말할 권리가 있습니다.
                </li>
              </ul>
            </div>
            <div className="TopMargin" />
            <div className="SubTitle">적극적으로 참여해주세요.</div>
            <div className="MainText">
              <ul className="ul">
                <li className="List">
                  <div className="Tage" />
                  적극적인 참여는 서로의 거리를 줄이고 보다 큰 가치를 만들어
                  냅니다.
                </li>
                <li className="List">
                  <div className="Tage" />
                  적극적으로 참여하여 조화롭게 어울려주세요.
                </li>
              </ul>
            </div>
            <div className="TopMargin" />
            <div className="Title">Code of Conduct (GDSC-Daejin)</div>
            <div className="TopMargin" />
            <div className="SubTitle">
              <ul className="ul">
                <li className="List">
                  <div className="Tage" />
                  수평적 문화를 위해 영어 닉네임을 사용합니다.
                  <br />
                  본명 사용은 지양해주세요.
                </li>
              </ul>
              <div className="TopMargin" />
              <ul className="ul">
                <li className="List">
                  <div className="Tage" />
                  경고 제도를 시행합니다. 3회 경고 누적시 제명 처리됩니다.{" "}
                  <br />
                  (제명시 다음 기수 즉, 2022년 GDSC DJU에 지원 및 참여가
                  불가능합니다.)
                </li>
              </ul>
              <div className="TopMargin" />
              <ul className="ul">
                <li className="List">
                  <div className="Tage" />
                  미팅 시작 15분 이후 참석 = 지각 / 미팅 시작 30분 이후 참석 =
                  결석으로 처리합니다. <br />
                  if (지각 3회 || 결석 1회)경고 1회
                </li>
              </ul>
              <div className="TopMargin" />
              <ul className="ul">
                <li className="List">
                  <div className="Tage" />
                  커뮤니티의 분위기를 흐리는 멤버라고 판단될 경우(경고가
                  부여되며) 운영진들의 상의를 통해 제명처리될 수 있습니다.
                </li>
              </ul>
            </div>
            <div className="TopMargin" />
          </div>
        </div>
      </div>
    </>
  );
};
export default CodeOfConduct;

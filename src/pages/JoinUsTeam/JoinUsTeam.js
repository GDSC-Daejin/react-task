import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import YellowBanner from "../../img/YellowBanner.png";
import './JoinUsTeam.css';

import { TeamInfomation } from '../../api/teamInformation';

const JoinUsTeam = () => {
  const { id } = useParams ();
  const navigate = useNavigate();
  const aboutTeam = TeamInfomation.find((aboutTeam) => aboutTeam.id === id);
  return (
    <>
      <img className="BannerImg" src={YellowBanner} alt="배너" />
      <div className="Container">
        <div className="TopMargin" />
        <div className="LayoutContainer">
          <div className="Title">{aboutTeam?.name}</div>
          <div className="TopMargin" />
          <div className="Tage" style={{textAlign: 'left'}}>
            열정적인 동료를 얻기 위해 이자리에 모였습니다
            <br/>
            우리는 함께 고민을 나누고 도전하며 목표를 향해 달리고 있습니다.
          </div>
          <div className="TopMargin" />
        </div>
      </div>
      <div className="Container">
        <div className="LayoutContainer">
          <div className="TopMargin" />
          <div className="ContentContainer">
            <div>
              <div className="SubTitle">이런 분을 찾습니다</div>
              <ul className="MainText">
                <li className="List">
                  <div className="Tage">
                    코딩에 남다른 애정을 가지신 분
                  </div>
                </li>
                <li className="List">
                  <div className="Tage">
                    1년이상 활동이 가능하신 분
                  </div>
                </li>
                <li className="List">
                  <div className="Tage">
                    책임감이 있으신 분
                  </div>
                </li>
                <li className="List">
                  <div className="Tage">
                    주도적으로 의견을 얘기하거나 반박하는데 거리낌이 없으신 분
                  </div>
                </li>
                <li className="List">
                  <div className="Tage">
                    동료들에게 좋은 시너지를 줄 수 있으신 분
                  </div>
                </li>
                <li className="List">
                  <div className="Tage">
                    타인의 의견을 적극적으로 수용하고 개선하려고 노력하시는 분
                  </div>
                </li>
                <li className="List">
                  <div className="Tage">
                    프로젝트의 애정과 책임을 가지고 주도적으로 개발, 개선할 수
                    있으신 분
                  </div>
                </li>
                <li className="List">
                  <div className="Tage">
                    커뮤니케이션 및 개발 문서 정리에 능숙하신 분
                  </div>
                </li>
                <li className="List">
                  <div className="Tage">
                    코딩에 대하여 잘 모르더라도 매일 학습하고, 모르는 게 있으면
                    주도적으로 해결할 수 있으신 분
                  </div>
                </li>
                {aboutTeam?.people != undefined
                  ? aboutTeam?.people.split('\n').map((line, id) => {
                    return (
                      <div className="List" key={id}>
                        <div className="Tage" />
                        {line}
                      </div>
                    );
                  })
                  : null}
              </ul>
              <div className="TopMargin" />
              <div className="SubTitle">이런 경험이 있다면 더 좋습니다</div>
              <ul className="MainText">
                <li className="List">
                  <div className="Tage">
                    Github, git에 대한 경험이나 프로젝트 경험이 있는 분이면
                    좋습니다.
                  </div>
                </li>
                <li className="List">
                  <div className="Tage">
                    FrameWork나 Library 사용이 능숙하신 분이면 좋습니다.
                  </div>
                </li>
                <li className="List">
                  <div className="Tage">
                    코딩에 대하여 잘 모르더라도 매일 학습하실 의지를 가지신 분이면
                    좋습니다.
                  </div>
                </li>
                {aboutTeam?.people != undefined
                  ? aboutTeam?.people.split('\n').map((line, id) => {
                    return (
                      <div className="List" key={id}>
                        <div className="Tage" />
                        {line}
                      </div>
                    );
                  })
                  : null}
              </ul>
              <div className="TopMargin" />
              <div className="SubTitle">GDSC의 혜택</div>
              <ul className="MainText">
                <li className="List">
                  <div className="Tage">
                    여러 국가의 GDSC 및 GDSC Korea와의 커뮤니케이션
                  </div>
                </li>
                <li className="List">
                  <div className="Tage">
                    GDG 개발자와의 컨택 기회
                  </div>
                </li>
                <li className="List">
                  <div className="Tage">
                    google에서 지원하는 소소한 기념품
                  </div>
                </li>
                <li className="List">
                  <div className="Tage">
                    자체 스터디를 위한 google의 코세라, 퀵랩 바우처 지급
                  </div>
                </li>
              </ul>
              <div className="TopMargin" />
            </div>
            <div className="ApplyContainer">
              <div className="ApplyContent">
                <div className="ApplyList">소속</div>
                <div className="ApplyInfo">{aboutTeam?.name}</div>
              </div>
              <div className="ApplyContent">
                <div className="ApplyList">합류과정</div>
                <div className="ApplyInfo">1차 서류 - 2차 면접</div>
              </div>
              <div className="ApplyContent">
                <div className="ApplyList">활동기간</div>
                <div className="ApplyInfo">1년이상</div>
              </div>
              <div className="TopMargin" />
              <button className="ApplyButton"
                onClick={() => {
                  window.open(
                    'https://forms.gle/FwoDUZSCcHHow8iC7',
                    '_blank',
                  );
                }}
              >
                지원하기
              </button>
              <div style={{height: '30px'}} />
              <button className="ApplyButton"
                onClick={() => {
                 navigate('/question');
                }}
              >
                자주하는 질문
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="TopMargin" />

    </>
  );
};

export default JoinUsTeam;
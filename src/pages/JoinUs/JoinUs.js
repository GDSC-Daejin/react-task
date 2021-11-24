import React from "react";
import { useNavigate } from 'react-router-dom';
import BlueBanner from "../../img/BlueBanner.png";
import './JoinUs.css'
import '../JoinUsTeam/JoinUsTeam.css'

import { TeamList } from '../../api/teamList';

const JoinUs = () => {
  const navigate = useNavigate();

  return (
    <>
      <img className="BannerImg" src={BlueBanner} alt="배너" />
      <div className="Container">
        <div className="TopMargin" />
        <div className="LayoutContainer">
          <div className="Title">함께 성장할 동료를 모집합니다</div>
          <div className="TopMargin" />
          <div className="Tage" style={{textAlign: 'left'}}>
            열정적인 동료를 얻기 위해 이자리에 모였습니다
            <br/>
            우리는 함께 고민을 나누고 도전하며 목표를 향해 달리고 있습니다.
          </div>
          <div className="TopMargin" />
          <div className="TeamCategoryWrapper">
            <table className="TeamTable">
              <tr className="TeamTableBasis">
                <th className="TeamCategory">Team</th>
                <th className="TeamCategory">Skill</th>
                <th className="TeamCategory">Stack</th>
              </tr>
              {TeamList.map((data, key) => (
                <tr className="TeamTableContent"
                    key={key}
                >
                  <th className="TeamName" onClick={() => {
                    navigate('/joinus/' + data.id)
                  }}
                  >
                    {data.name}
                  </th>
                  <th className="TeamSkill">{data.skill}</th>
                  <th className="TeamSkill">{data.stack}</th>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
      <div className="TopMargin" />
    </>
  );
};

export default JoinUs;

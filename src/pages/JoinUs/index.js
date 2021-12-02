import React from "react";
import { useNavigate } from 'react-router-dom';
import BlueBanner from "../../img/BlueBanner.png";
import './JoinUs.css'
import '../JoinUsTeam/JoinUsTeam.css'

import { teamList } from '../../api/teamList';

const JoinUs = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="BannerWrapper">
        <img className="BannerImg" src={BlueBanner} alt="배너" />
      </div>
      <div className="Container">
        <div className="TopMargin" />
        <div className="LayoutContainer">
          <div className="Title">함께 성장할 동료를 모집합니다</div>
          <div className="TopMargin" />
          <div className="Tage">
            열정적인 동료를 얻기 위해 이자리에 모였습니다
            <br/>
            우리는 함께 고민을 나누고 도전하며 목표를 향해 달리고 있습니다.
          </div>
          <div className="TopMargin" />
          <div className="TeamCategoryWrapper">
            <div className="TeamCategory">Team</div>
            <div className="TeamSubCategory">Skill</div>
            <div className="TeamSubCategory">Stack</div>
          </div>
          {teamList.map((data, key) => (
            <div className="CategoryWrapper"
              key={key}
              onClick={() => {
                navigate('/joinus/' + data.id);
              }}
            >
              <div className="CategoryInner">
                <div className="Category">{data.name}</div>
                <div className="SubCategory">{data.skill}</div>
                <div className="SubCategory">{data.stack}</div>
              </div>
            </div>
          ))}
          {teamList.map((data, key) => (
            <div className="MobileCategoryWrapper"
                 key={key}
                 onClick={() => {
                   navigate('/joinus/' + data.id);
                 }}
            >
              <div className="MobileCategoryInner">
                <div className="Category">{data.name}</div>
                <div className="SubCategory">{data.skill}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="TopMargin" />
    </>
  );
};

export default JoinUs;
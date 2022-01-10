import React from "react";
import "../Introduce/introduce.css";
import BlueBanner from "../../img/BlueBanner.png";
import { useNavigate } from "react-router";
import { TeamList } from "../../api/TeamList/index";
import { categoryAnimate } from "../../components/common/Variants/Variants";
import "../Joinus/Joinus.css";

export const JoinUs = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="BannerWrapper">
        <img className="BannerImg" src={BlueBanner} />
      </div>
      <div className="LayoutContainer">
        <div className="ContainerInner">
          <div className="TopMargin" />
          <div className="Title">함께 성장할 동료를 모집합니다</div>
          <div className="TopMargin" />
          <div className="MainText">
            열정적인 동료를 얻기 위해 이 자리에 모였습니다.
            <br />
            우리는 함께 고민을 나누고 도전하며 목표를 향해 달리고 있습니다.
          </div>
          <div className="TopMargin" />
          <div className="TeamCategoryWrapper">
            <div className="TeamCategory">Team</div>
            <div className="TeamSubCategory">Skill</div>
            <div className="TeamSubCategory">Stack</div>
          </div>
          {/*pc 환경 팀 팀스트*/}
          {TeamList.map((data, key) => (
            <div
              className="CategoryWrapper"
              key={key}
              initial={"unHover"}
              whileHover={"hovered"}
              variants={categoryAnimate}
              onClick={() => {
                navigate("/joinus/" + data.id);
              }}
            >
              <div className="CategoryInner">
                <div className="Category">{data.name}</div>
                <div className="SubCategory">{data.skill}</div>
                <div className="SubCategory">{data.stack}</div>
              </div>
            </div>
          ))}
          {/*모바일 환경 팀 리스트*/}
          {TeamList.map((data, key) => (
            <div
              className="MobileCategoryWrapper"
              key={key}
              onClick={() => {
                navigate("/joinus/" + data.id);
              }}
            >
              <div className="MobileCategoryInner">
                <div className="Category">{data.name}</div>
                <div className="SubCategory">{data.skill}</div>
              </div>
            </div>
          ))}
          <div className="TopMargin" />
        </div>
      </div>
    </>
  );
};
export default JoinUs;

import React, { useState } from "react";
import GreenBanner from "../../img/GreenBanner.png";
import "./introduce.css";
import { MemberCard } from "../../components/common/MemberCard/index";
import {
  listAnimate,
  memberCardAnimate,
} from "../../components/common/Variants/Variants";
import { memberList } from "../../api/pageData/MemberList";
import { introduceText, workWhenCome } from "../../api/pageData/introduceText";
import { motion } from "framer-motion";
import { Skeleton } from "@mui/material";
import { Modal } from "react-rainbow-components";

const Introduce = () => {
  const [selectedMember, setSelectedMember] = useState < number > 0;
  const [modalHandler, setModalHandler] = useState(false);

  return (
    <>
      {/*Modal*/}
      <Modal
        className="StyledModal"
        size={"small"}
        isOpen={modalHandler}
        onRequestClose={() => setModalHandler(false)}
      >
        {memberList[selectedMember].memberImg ? (
          <img
            className="MemberImg"
            src={memberList[selectedMember].memberImg}
          />
        ) : (
          <Skeleton variant={"circular"} height={200} width={200} />
        )}
        <div className="NickName">{memberList[selectedMember].nickName}</div>
        <div className="Name">{memberList[selectedMember].name}</div>
        <div className="Role">{memberList[selectedMember].role}</div>
        <div className="Name">{memberList[selectedMember].introduce}</div>
      </Modal>

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
              {introduceText.split("\n").map((line, id) => (
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
              {workWhenCome.split("\n").map((line, id) => (
                <div className="List" key={id}>
                  <div className="Tage" />
                  {line}
                </div>
              ))}
            </ul>
          </div>
          <div className="TopMargin" />
          <div className="Title">팀 소개</div>
          <div className="TopMargin" />

          <section variants={listAnimate} className="CardList">
            {memberList.map((memberInfo, id) => (
              <motion.div
                key={id}
                variants={memberCardAnimate}
                initial={"offView"}
                whileInView={"onView"}
                viewport={{ once: true, amount: 0.8 }}
                className="MemberCardWrapper"
                onClick={() => {
                  setSelectedMember(id);
                  setModalHandler(true);
                }}
              >
                <MemberCard memberInfo={memberInfo} />
              </motion.div>
            ))}
          </section>
        </div>
      </div>
      <div className="TopMargin" />
    </>
  );
};

export default Introduce;

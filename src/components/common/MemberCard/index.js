import React from "react";
import { Skeleton } from "@mui/material";
import "./membercard.css";
import { index } from "../../../api/memberlist";
import { memberCardAnimate } from "../membercardanimate/index";
import { motion } from "framer-motion";

export const MemberCard = () => {
  return (
    <>
      {index.map((memberInfo, id) => (
        <>
          <motion.div
            variants={memberCardAnimate}
            initial={"offView"}
            WhileInView={"onView"}
            viewport={{ once: true, amount: 0.8 }}
            className="MemberCardWrapper"
          >
            <div className="StyledMemberCard">
              {memberInfo.memberImg ? (
                <img
                  className="MemberImg"
                  src={memberInfo.memberImg}
                  key={id}
                />
              ) : (
                <Skeleton variant={"circular"} height={200} width={200} />
              )}
              <div className="NickName">{memberInfo.nickName}</div>
              <div className="Name">{memberInfo.name}</div>
              <div className="Role">{memberInfo.role}</div>
            </div>
          </motion.div>
        </>
      ))}
    </>
  );
};

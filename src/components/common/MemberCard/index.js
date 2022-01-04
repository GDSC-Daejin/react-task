import React from "react";
import { Skeleton } from "@mui/material";
import "./membercard.css";

export const MemberCard = ({ memberInfo }) => {
  return (
    <>
      {memberInfo && (
        <div className="StyledMemberCard">
          {memberInfo.memberImg ? (
            <img className="MemberImg" src={memberInfo.memberImg} />
          ) : (
            <Skeleton variant={"circular"} height={200} width={200} />
          )}
          <div className="NickName">{memberInfo.nickName}</div>
          <div className="Name">{memberInfo.name}</div>
          <div className="Role">{memberInfo.role}</div>
        </div>
      )}
    </>
  );
};

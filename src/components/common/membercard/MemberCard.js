import React from "react";
import { Skeleton } from "@mui/material";
import "./MemberCard.css";
import { memberInfo } from "../../../pages/introduce/index";

function UseMemberImg {
    if(
        {memberInfo.MemberImg}
    )
}

export const MemberCard = () => {
  return (
    <>
      <div className="StyledMemberCard">
        {memberInfo.MemberImg ? (
          <div className="MemberImg" src={memberInfo.MemberImg} />
        ) : (
          <Skeleton variant="circular" width={150} height={150} />
        )}
        <div className="NickName">{memberInfo.nickName}</div>
        <div className="Name">{memberInfo.nickName}</div>
        <div className="Role">{memberInfo.nickName}</div>
      </div>
    </>
  );
};

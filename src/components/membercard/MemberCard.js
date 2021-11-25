import React from "react";
import { Skeleton } from "@mui/material";
import { Name, NickName, Role, StyledMemberCard, MemberImg } from "./styled";

export const MemberCard = ({ MemberInfo }: any) => {
  return (
    <>
      <div className="MemberCard" />
      <div className="MemberImg" />
      <div className="memberinfo" />
      <div className="StyledMemberCard">
        {MemberInfo.MemberImg ? (
          <MemberImg src={MemberInfo.MemberImg} />
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

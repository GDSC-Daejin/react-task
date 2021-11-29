import React from "react";
import { Skeleton } from "@mui/material";
import "./MemberCard.css";
import { memberList } from "../../../api/MemberList";

export const MemberCard = () => {
  return (
    <>
      <div className="StyledMemberCard">
        {memberList.map((memberInfo, id) => (
          <>
            {memberInfo.memberImg ? (
              <img className="MemberImg" src={memberInfo.memberImg} key={id} />
            ) : (
              <Skeleton variant={"circular"} height={200} width={200} />
            )}
            <div className="NickName">{memberInfo.nickName}</div>
            <div className="Name">{memberInfo.name}</div>
            <div className="Role">{memberInfo.role}</div>
          </>
        ))}
      </div>
    </>
  );
};

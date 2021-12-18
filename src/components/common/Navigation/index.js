import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => {
          navigate("/Introduce");
        }}
      >
        소개
      </div>
      <div
        onClick={() => {
          navigate("/CodeOfConduct");
        }}
      >
        Code Of Conduct
      </div>
      <div>Join Us</div>
      <div
        onClick={() => {
          navigate("/자주하는질문");
        }}
      >
        자주하는 질문
      </div>
    </>
  );
};

export default Navigation;

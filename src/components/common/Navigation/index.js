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
          navigate("/QnA");
        }}
      >
        Q&A
      </div>
    </>
  );
};

export default Navigation;

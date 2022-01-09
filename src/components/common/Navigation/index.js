import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => {
          navigate("/introduce");
        }}
      >
        소개
      </div>
      <div
        onClick={() => {
          navigate("/codeofconduct");
        }}
      >
        Code Of Conduct
      </div>
      <div
        onClick={() => {
          navigate("/Joinus");
        }}
      >
        Join Us
      </div>
      <div
        onClick={() => {
          navigate("/qna");
        }}
      >
        Q&A
      </div>
    </>
  );
};

export default Navigation;

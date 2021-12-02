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
          navigate("/joinus");
        }}
      >
        지원하기
      </div>
    </>
  );
};

export default Navigation;

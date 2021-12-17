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
    </>
  );
};

export default Navigation;

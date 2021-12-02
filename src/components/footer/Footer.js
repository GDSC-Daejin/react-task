import React from "react";
import "../footer/Footer.css";
import googleDevelopers from "../../img/googleDevelopers.png";
import GDSCChapterLogo from "../../img/GDSC-Chapter-Logo.png";

export const Footer = () => {
  return (
    <div className="FooterWrapper">
      <div className="FooterContent">
        <div className="TopMargin" />
        <img className="FooterLogo" src={googleDevelopers} />
        <div className="TopMargin" />
        <img className="FooterGDSCLogo" src={GDSCChapterLogo} />
        <div className="TopMargin" />
        <span className="FooterSubTitle">{"Copyright © "}GDSC Daejin 2021</span>
        <span className="FooterSubTitle">Created by Jason, Harry</span>
      </div>
    </div>
  );
};

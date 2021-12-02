import React from 'react';
import './Footer.css'
import googleDevelopers from "../../img/googleDevelopers.png";
import gdscChapterLogo from "../../img/GDSC-Chapter-Logo.png";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="FooterContainer">
          <div className="FooterContent">
            <div className="TopMargin" />
            <img className="FooterLogo" src={googleDevelopers} alt="배너" style={{width: '200px'}} />
            <div className="TopMargin" />
            <img className="FooterLogo" src={gdscChapterLogo} alt="배너" style={{width: '300px'}} />
            <div className="TopMargin" />
            <div className="FooterSubTitle">Copyright © GDSC Daejin 2021</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
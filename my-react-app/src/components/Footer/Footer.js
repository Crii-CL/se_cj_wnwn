import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__title">
        <span>Developed by Team CENJ </span>
      </div>
      <div className="footer__names">
        <span>Cristopher Campos Lopez </span>
        <span>Eddie Mendez</span>
        <span>Nathaniel Kelly </span>
        <span>Jerry Jackson</span>
      </div>
      <div> &copy; 2023</div>
    </footer>
  );
};

export default Footer;

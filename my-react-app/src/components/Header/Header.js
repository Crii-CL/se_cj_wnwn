import logo from "../../images/logo.svg";
import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src={logo}
        alt="Waste Not Want Not logo"
      ></img>
      <div className="header__container">
        <h1 className="header__container-title">Waste Not Want Not</h1>
        <p className="header__container-description">
          find the local eWaste disposal sites near you
        </p>
      </div>
    </div>
  );
};

export default Header;

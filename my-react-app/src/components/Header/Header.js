import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <div class="header">
      <img class="header__logo" src="" alt="Waste Not Want Not logo"></img>
      <div class="header__container">
        <h1 class="header__container-title">Waste Not Want Not</h1>
        <p class="header__container-desciption">
          find the local eWaste disposal sites near you
        </p>
      </div>
    </div>
  );
};

export default Header;

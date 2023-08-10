import logo from "../../images/logo.svg";
import "./Home.css";
import React from "react";

export default function Home() {
  return (
    <div className="home__header">
      <div className="home__logo">
        <img src={logo} className="home__logo-img" alt="logo" />
      </div>
      <p className="home__caption">Waste Not Want Not</p>
    </div>
  );
}

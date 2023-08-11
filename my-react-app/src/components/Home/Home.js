import logo from "../../images/logo.svg";
import "./Home.css";
import React from "react";

export default function Home() {
  const placeholderTexts = [
    "Enter Address",
    "Where's your city",
    "Enter ZipCode",
  ];

  return (
    <div className="home">
      <div className="home__header">
        <div>
          <img src={logo} className="home__logo" alt="logo" />
        </div>
        <p className="home__caption">Waste Not Want Not</p>
        <input
          type="text"
          placeholder="Enter Address"
          className="home__search"
        />
      </div>
    </div>
  );
}

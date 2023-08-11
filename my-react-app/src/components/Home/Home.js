import logo from "../../images/logo.svg";
import "./Home.css";
import React from "react";
// import { Link } from "react-router-dom";

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
          type="email"
          placeholder="Enter Email Address"
          className="home__search"
          required
        />
        {/* <Link className="home__link" to="/home"> */}
        <button type="button" className="home__submit">
          Enter
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
}

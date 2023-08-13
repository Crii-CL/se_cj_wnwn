import logo from "../../images/logo.svg";
import "./Home.css";
import React, { useState } from "react";

const Home = (props) => {
  const setLocation = () => {
    const input = document.querySelector("#search-bar");
    if (input.value.length > 0) {
      props.setIsLocated(true);
      props.handleScroll("main");
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setLocation();
    }
  };

  return (
    <div className="home">
      <div className="home__header">
        <div>
          <img src={logo} className="home__logo" alt="logo" />
        </div>
        <p className="home__caption">Waste Not Want Not</p>
        <input
          id="search-bar"
          type="text"
          placeholder="Enter Address"
          className="home__search"
          onKeyDown={handleEnter}
          onChange={(e) => {
            props.setAddress(e.target.value);
          }}
          required
        />
        <button type="button" onClick={setLocation} className="home__submit">
          Enter
        </button>
      </div>
    </div>
  );
};

export default Home;

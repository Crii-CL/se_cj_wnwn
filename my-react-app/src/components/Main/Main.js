import "./Main.css";
import React from "react";
import SideBar from "../SideBar/SideBar";
import Map from "../Map/Map";
import Header from "../Header/Header";

const Main = ({ address }) => {
  return (
    <>
      <section id="main" className="main">
        <Header />
        <div className="main__content">
          <div className="main__sidebar">
            <SideBar />
          </div>
          <div className="main__map">
            <Map address={address} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;

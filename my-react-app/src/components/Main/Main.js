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
        <div className="page__content">
          <SideBar />
          <Map address={address} />
        </div>
      </section>
    </>
  );
};

export default Main;

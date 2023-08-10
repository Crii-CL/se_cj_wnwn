import "./Main.css";
import React from "react";
import SideBar from "../SideBar/SideBar";
import Map from "../Map/Map";

const Main = () => {
  return (
    <section className="main">
      <div className="page_content">
        <SideBar />
        <Map />
      </div>
    </section>
  );
};

export default Main;

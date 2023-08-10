import "./Main.css";
import React from "react";
import SideBar from "../SideBar/SideBar";
import Map from "../Map/Map";

const Main = () => {
  return (
    <div class="page_content">
      <SideBar />
      <Map />
    </div>
  );
};

export default Main;

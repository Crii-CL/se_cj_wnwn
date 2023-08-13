import "./Main.css";
import React from "react";
import SideBar from "../SideBar/SideBar";
import MapComponent from "../Map/Map";
import Header from "../Header/Header";

const Main = (props) => {
  return (
    <>
      <section id="main" className="main">
        <Header />
        <div className="main__content">
          <div className="main__sidebar">
            <SideBar pin={props.pin} />
          </div>
          <div className="main__map">
            <MapComponent address={props.address} setPin={props.setPin} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;

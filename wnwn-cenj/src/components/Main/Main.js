import "./Main.css";
import React from "react";
import MapComponent from "../Map/Map";
import Header from "../Header/Header";

const Main = (props) => {
  return (
    <>
      <section id="main" className="main">
        <Header />
        <div className="main__content">
          <div className="main__map">
            <MapComponent
              address={props.address}
              setPin={props.setPin}
              notFound={props.notFound}
              setNotFound={props.setNotFound}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;

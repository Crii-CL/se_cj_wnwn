import "./Main.css";
import React from "react";
import Map from "../Map/Map";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ResourceCenter from "../ResourceCenter/ResourceCenter";

const Main = (props) => {
  return (
    <>
      <section id="main" className="main">
        <Header address={props.address} />
        <div className="main__map">
          <Map
            address={props.address}
            setPin={props.setPin}
            notFound={props.notFound}
            setNotFound={props.setNotFound}
          />
        </div>
        <div className="main__resource-center">
          <ResourceCenter></ResourceCenter>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Main;

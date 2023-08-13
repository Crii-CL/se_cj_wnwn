import "./Main.css";
import React from "react";
import Map from "../Map/Map";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Main = (props) => {
  return (
    <>
      <section id="main" className="main">
        <Header />
        <div className="main__map">
          <Map
            address={props.address}
            setPin={props.setPin}
            notFound={props.notFound}
            setNotFound={props.setNotFound}
          />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Main;

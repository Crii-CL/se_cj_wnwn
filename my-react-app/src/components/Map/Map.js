import "./Map.css";
import { constants } from "../../utils/constants";
import React from "react";

const Map = () => {
  return (
    <div className="map">
      <iframe
        className="map__iframe"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/search?q=ewaste+recycling+LATITUDE,LONGITUDE&key=${constants.apiKey}`}
      ></iframe>
    </div>
  );
};

export default Map;

import "./Map.css";
import { constants } from "../../utils/constants";
import React from "react";

const Map = () => {
  return (
    <div className="">
      <iframe
        width="600"
        height="450"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${constants.apiKey}&q=Space+Needle,Seattle+WA`}
      ></iframe>
    </div>
  );
};

export default Map;

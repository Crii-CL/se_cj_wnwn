import "./Map.css";
import { constants } from "../../utils/constants";
import React, { useState, useEffect } from "react";

const Map = ({ address }) => {
  const [src, setSrc] = useState("");

  useEffect(() => {
    const geocoderUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${constants.apiKey}`;

    fetch(geocoderUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          const location = data.results[0].geometry.location;
          const latitude = location.lat;
          const longitude = location.lng;

          const embedUrl = `https://www.google.com/maps/embed/v1/search?q=ewaste+recycling&center=${latitude},${longitude}&key=${constants.apiKey}`;

          setSrc(embedUrl);
        }
      })
      .catch((err) => {
        console.error("Requested resource not found", err);
      });
  }, []);

  return (
    <div className="map">
      <iframe
        id="map"
        width="350"
        height="350"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={src}
      ></iframe>
    </div>
  );
};

export default Map;

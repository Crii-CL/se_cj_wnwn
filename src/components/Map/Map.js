import "./Map.css";
import { constants } from "../../utils/constants";
import React, { useState, useEffect } from "react";

const Map = ({ address, setPin, notFound, setNotFound }) => {
  const [src, setSrc] = useState("");

  useEffect(() => {
    const geocoderUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${constants.apiKey}`;

    fetch(geocoderUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          const embedUrl = `https://www.google.com/maps/embed/v1/search?q=+recycling+centers+${encodeURIComponent(
            address
          )}&key=${constants.apiKey}`;

          setSrc(embedUrl);

          setNotFound(false);
        } else if (data.results && data.results.length === 0) {
          setNotFound(true);
        }
      })
      .catch((err) => {
        console.error("Requested resource not found", err);
      });
  }, [address]);

  return (
    <>
      {!notFound ? (
        <iframe
          id="map"
          className="map__iframe"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={src}
          title="Map"
        ></iframe>
      ) : (
        <div id="map__not-found" className="map__iframe">
          <p className="map__not-found-text">
            Couldn't quite pin down your location :/
          </p>
        </div>
      )}
    </>
  );
};

export default Map;

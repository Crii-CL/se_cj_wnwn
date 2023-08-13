import "./Map.css";
import { constants } from "../../utils/constants";
import { Map, GoogleApiWrapper } from "google-maps-react";
import React, { useState, useEffect } from "react";

const MapComponent = (props) => {
  const [src, setSrc] = useState("");
  const [notFound, setNotFound] = useState(false);
  const containerStyle = {
    width: "300px",
    height: "300px",
  };

  const searchRecyclingCenters = () => {
    const searchQuery = "ewaste recycling center";

    const placesUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
      searchQuery
    )}&key=${constants.apiKey}`;

    fetch(placesUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          const recyclingCenters = data.results.map((result) => ({
            lat: result.geometry.location.lat,
            lng: result.geometry.location.lng,
          }));
          setNotFound(false);
          setPin(data.results);
        } else {
          setNotFound(true);
        }
      })
      .catch((error) => {
        console.error(
          "Error fetching recycling centers from Places API:",
          error
        );
      });
  };

  useEffect(() => {
    const geocoderUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      props.address
    )}&key=${constants.apiKey}`;

    fetch(geocoderUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          const location = data.results[0].geometry.location;
          const latitude = location.lat;
          const longitude = location.lng;

          // const embedUrl = `https://www.google.com/maps/embed/v1/search?q=ewaste+recycling+${encodeURIComponent(
          //   props.address
          // )}&key=${constants.apiKey}`;

          const placesUrl = `https://maps.googleapis.com/maps/api/js?key=${constants.apiKey}&libraries=places&callback=initMap`;

          // setSrc(embedUrl);
          setSrc(placesUrl);
          setNotFound(false);
          console.log(data);
        } else if (data.results && data.results.length === 0) {
          setNotFound(true);
        }
      })
      .catch((err) => {
        console.error("Requested resource not found", err);
      });
  }, [props.address]);

  return (
    <>
      {!notFound ? (
        // <iframe
        //   id="map"
        //   className="map__iframe"
        //   loading="lazy"
        //   allowFullScreen
        //   referrerPolicy="no-referrer-when-downgrade"
        //   src={src}
        //   title="Map"
        // ></iframe>
        <div className="map__iframe">
          <Map google={props.google} zoom={8} style={containerStyle} />
        </div>
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

export default GoogleApiWrapper({
  apiKey: `${constants.apiKey}`,
})(MapComponent);

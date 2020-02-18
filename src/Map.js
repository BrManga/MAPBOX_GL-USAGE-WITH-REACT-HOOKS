import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { token } from "./token";
const Map = () => {
  const mapContainer = useRef(null);
  useEffect(() => {
    mapboxgl.accessToken = token;
    new mapboxgl.Map({
      container: mapContainer.current, //ref to mapContainer in return part
      style: "mapbox://styles/mapbox/streets-v11", //map styles you can find different ones in website
      center: [13.38, 52.542], //Center of the map Coordinates for BERLIN
      zoom: 8 //Bigger number zooms in
    });
  }, []);
  return (
    <div>
      <h2>MAP</h2>
      <div
        style={{
          //Just style and use it
          width: "500px",
          height: "500px"
        }}
      >
        <div ref={el => (mapContainer.current = el)} className="" />
      </div>
    </div>
  );
};

export default Map;

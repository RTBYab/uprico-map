import React, { useEffect, useRef, useState } from "react";
import ReactMapGL from "react-map-gl";
import { setRTLTextPlugin } from "mapbox-gl";
setRTLTextPlugin(
  "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.1.2/mapbox-gl-rtl-text.js"
);

const Map = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 35.6892,
    longitude: 51.389,
    zoom: 8
  });

  return (
    <ReactMapGL
      className="mapContainer"
      {...viewport}
      onViewportChange={viewport => setViewport(viewport)}
      mapboxApiAccessToken="pk.eyJ1IjoiZ2FicmllbHpuMSIsImEiOiJjazdxZzYzanEwMmoyM21wbHY0MTA5MDgwIn0.Wpzn2yhka9vNtvedfODJjA"
      styles="mapbox://styles/gabrielzn1/ck7qiu7hg17a11ijga59u4fvo"
    />
  );
};

export default Map;

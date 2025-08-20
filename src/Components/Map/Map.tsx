import React, { useEffect } from "react";
import "../../Styling/components/map.scss";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map: React.FC = () => {
  useEffect(() => {
    const map = L.map("map").setView([51.505, -0.09], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    return () => {
      map.remove(); // cleanup
    };
  }, []);

  return <div id="map" className="mapContainer"></div>;
};

export default Map;

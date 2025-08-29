import React, { useEffect } from "react";
import "../../Styling/components/map.scss";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LatLng } from "../Types";

interface MapProps {
  setLatitudeLongitude: React.Dispatch<
    React.SetStateAction<LatLng | undefined>
  >;
}

const Map: React.FC<MapProps> = ({ setLatitudeLongitude }) => {
  useEffect(() => {
    const map = L.map("map").setView([52.815, -1.126], 6);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    function onMapClick(e: L.LeafletMouseEvent) {
      setLatitudeLongitude(e.latlng);
    }

    map.on("click", onMapClick);

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" className="mapContainer" data-testid="map"></div>;
};

export default Map;

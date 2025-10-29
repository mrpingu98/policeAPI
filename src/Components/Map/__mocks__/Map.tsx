import { MapProps } from "../../../Interfaces";
import React from "react";

const MockMap: React.FC<MapProps> = ({ setLatitudeLongitude }) => {
  return (
    <>
      <button onClick={() => setLatitudeLongitude({ lat: 57.56789, lng: 93.12345 })} data-testid="mock-map">
        Mock Map
      </button>
    </>
  );
};

export default MockMap;

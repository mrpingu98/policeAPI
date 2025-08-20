import React, { useState } from "react";
import Map from "../../Components/Map/Map";
import "../../Styling/components/map.scss";
import { LatLng } from "../../Components/Types";

const Api: React.FC = () => {
  const [latitudeLongitude, setLatitudeLongitude] = useState<LatLng>({
    lat: 0,
    lng: 0,
  });
  return (
    <div>
      <Map setLatitudeLongitude={setLatitudeLongitude} />
      <div>
        lat: {latitudeLongitude.lat} long: {latitudeLongitude.lng}
      </div>
    </div>
  );
};

export default Api;

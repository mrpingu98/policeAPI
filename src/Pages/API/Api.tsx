import React, { useState } from "react";
import Map from "../../Components/Map/Map";
import "../../Styling/components/map.scss";
import { LatLng } from "../../Components/Types";
import Textbox from "../../Components/Textbox/Textbox";
import { Button } from "../../Components/Button/Button";

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
      <Textbox />
      <Button
        text="Submit"
        variant="primary"
        onClick={() => console.log("submitted")}
      />
    </div>
  );
};

export default Api;

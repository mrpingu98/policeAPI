import React, { useState } from "react";
import Map from "../../Components/Map/Map";
import "../../Styling/components/map.scss";
import { LatLng } from "../../Components/Types";
import DatePickerMonth from "../../Components/DatePickerMonth/DatePickerMonth";
import { Button } from "../../Components/Button/Button";

const Api: React.FC = () => {
  const [latitudeLongitude, setLatitudeLongitude] = useState<LatLng>({
    lat: 0,
    lng: 0,
  });

  const [date, setDate] = useState<string>("");
  console.log(date);

  return (
    <div>
      <h1>Crimes by location</h1>
      <div>
        Use the map below to find out about crimes by location across the UK.
        Pick a point on the map and input a date to find out the recorded crimes
        at that location at that time.
      </div>
      <Map setLatitudeLongitude={setLatitudeLongitude} />
      <div>
        lat: {latitudeLongitude.lat} long: {latitudeLongitude.lng}
      </div>
      <DatePickerMonth setDate={setDate} />
      <Button
        text="Submit"
        variant="primary"
        onClick={() => console.log("submitted")}
      />
    </div>
  );
};

export default Api;

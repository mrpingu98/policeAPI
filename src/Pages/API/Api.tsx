import React, { useState } from "react";
import Map from "../../Components/Map/Map";
import "../../Styling/components/map.scss";
import { LatLng } from "../../Components/Types";
import { DatePickerMonth } from "../../Components/DatePickerMonth/DatePickerMonth";
import { Button } from "../../Components/Button/Button";
import "../../Styling/pages/api.scss";

const Api: React.FC = () => {
  const [latitudeLongitude, setLatitudeLongitude] = useState<
    LatLng | undefined
  >();

  const [date, setDate] = useState<string>("");

  return (
    <div>
      <h2>Crimes by location</h2>
      <p>
        Use the map below to find out about crimes by location across the UK.
        Pick a point on the map and input a date to find out the recorded crimes
        at that location at that time.
      </p>
      <Map setLatitudeLongitude={setLatitudeLongitude} />
      <div className="sectionContainers" data-testId="location">
        <p>
          <b>Location:</b>{" "}
          {latitudeLongitude ? (
            `Latitude: ${latitudeLongitude.lat}, Longitude: ${latitudeLongitude.lng}`
          ) : (
            <em>Select a point on the map</em>
          )}
        </p>
      </div>
      <div className="sectionContainers">
        <p>
          <b>Date:</b>
        </p>
        <DatePickerMonth setDate={setDate} />
      </div>
      <div className="button">
        <Button
          text="Submit"
          variant="primary"
          onClick={() => console.log("submitted")}
        />
      </div>
    </div>
  );
};

export default Api;

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

  //make dictionary to pass through using string interpolation
  //key-value piars function that you can concatenate onto the end of it for
  //helper method - give me date lat and long - then interpolate onto the url

  //date and submit in a form
  //then validation os latlng state for submit button
  //for now have use usestate to disable button
  //mayb eas a stretch case, can make type=submit for button, then onsubmit check that date input has something, otherwise throw an alert

  //customise error for map - haslatlNg disable button function - or if they click button, then red border aorund map saying please select a point

  //regex for form inputs for the date

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://data.police.uk/api/crimes-street/all-crime?date=2024-01&lat=52.629729&lng=-1.131592"
      );

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMaxDate = () => {
    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();
    const prevYear = (currentYear - 1).toString();

    if (today.getMonth() == 1) {
      return `${prevYear}-12`;
    } else {
      return `${currentYear}-${currentMonth.toString().padStart(2, "0")}`;
    }
  };

  return (
    <div>
      <h2>Crimes by location</h2>
      <p className="description">
        Use the map below to find out about crimes by location across the UK.
        Pick a point on the map and input a date to find out the recorded crimes
        at that location at that time.
      </p>
      <div className="desktopContainer">
        <div className="mapContainer" data-testId="location">
          <Map setLatitudeLongitude={setLatitudeLongitude} />
        </div>
        <div className="formContainer">
          <div className="sectionContainers" data-testId="location">
            <p>
              <b>Location:</b>{" "}
              {latitudeLongitude ? (
                `Latitude: ${latitudeLongitude.lat.toFixed(
                  5
                )}, Longitude: ${latitudeLongitude.lng.toFixed(5)}`
              ) : (
                <em>Select a point on the map</em>
              )}
            </p>
          </div>
          <div className="sectionContainers" data-testId="datePicker">
            <p>
              <b>Date:</b>
            </p>
            <DatePickerMonth
              setDate={setDate}
              name="date-picker"
              min="2023-01"
              max={handleMaxDate()}
            />
          </div>
          <div className="button">
            <Button
              text="Submit"
              variant="primary"
              onClick={handleSubmit}
              disabled={latitudeLongitude && date ? false : true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Api;

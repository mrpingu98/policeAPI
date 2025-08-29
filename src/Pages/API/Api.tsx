import React, { useState } from "react";
import Map from "../../Components/Map/Map";
import "../../Styling/components/map.scss";
import { LatLng } from "../../Components/Types";
import { DatePickerMonth } from "../../Components/DatePickerMonth/DatePickerMonth";
import { Button } from "../../Components/Button/Button";
import "../../Styling/pages/api.scss";
import { getCurrentMonthAndYear } from "../../utils/date";
import { getRequest } from "../../api/helpers";
import { useQuery } from "@tanstack/react-query";
//maybe as a stretch case, can make type=submit for button, then onsubmit check that date input has something, otherwise throw an alert
const Api: React.FC = () => {
  const [latitudeLongitude, setLatitudeLongitude] = useState<
    LatLng | undefined
  >();

  const [date, setDate] = useState<string>("");

  const {
    isPending,
    error,
    data,
    isFetching,
    refetch: getCrimesByLocation,
  } = useQuery({
    queryKey: ["getCrimesByLocation"],
    queryFn: () =>
      getRequest([
        { key: "date", value: date },
        {
          key: "lat",
          value: latitudeLongitude ? latitudeLongitude.lat.toString() : "0",
        },
        {
          key: "lng",
          value: latitudeLongitude ? latitudeLongitude.lng.toString() : "0",
        },
      ]),
    enabled: false,
  });

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
          <div className="datePickerContainer" data-testId="datePicker">
            <p>
              <b>Date:</b>
            </p>
            <DatePickerMonth
              setDate={setDate}
              name="date-picker"
              min="2023-01"
              max={getCurrentMonthAndYear()}
            />
          </div>
          <div className="button">
            <Button
              text="Submit"
              variant="primary"
              onClick={getCrimesByLocation}
              disabled={latitudeLongitude && date ? false : true}
            />
          </div>
        </div>
      </div>
      {data ? (
        <div>
          <h3>Crimes recorded at selected location</h3>
          {data[0].category}
        </div>
      ) : null}
    </div>
  );
};

export default Api;

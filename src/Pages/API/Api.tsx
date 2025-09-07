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
import { CrimeData } from "../../Components/CrimeData/CrimeData";
//maybe as a stretch case, can make type=submit for button, then onsubmit check that date input has something, otherwise throw an alert
const Api: React.FC = () => {
  const [latitudeLongitude, setLatitudeLongitude] = useState<
    LatLng | undefined
  >();

  const [date, setDate] = useState<string>("");

  const {
    error: errorCrimesByLocation,
    data: dataCrimesByLocation,
    isFetching: isFetchingCrimesByLocation,
    isError: isErrorCrimesByLocation,
    refetch: refetchCrimesByLocation,
  } = useQuery({
    queryKey: ["getCrimesByLocation"],
    queryFn: () =>
      getRequest("crimes-at-location", [
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

  const {
    error: errorCrimesByRadius,
    data: dataCrimesByRadius,
    isFetching: isFetchingCrimesByRadius,
    isError: isErrorCrimesByRadius,
    refetch: refetchCrimesByRadius,
  } = useQuery({
    queryKey: ["getCrimesByRadius"],
    queryFn: () =>
      getRequest("crimes-street/all-crime", [
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

  const handleClick = () => {
    refetchCrimesByLocation();
    refetchCrimesByRadius();
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
              onClick={handleClick}
              disabled={latitudeLongitude && date ? false : true}
            />
          </div>
        </div>
      </div>
      <CrimeData
        title="Crimes by specific location"
        crimeData={dataCrimesByLocation}
        isError={isErrorCrimesByLocation}
        isFetching={isFetchingCrimesByLocation}
        error={errorCrimesByLocation}
      />
      <CrimeData
        title="Crimes within a 1 mile radius of selected location"
        crimeData={dataCrimesByRadius}
        isError={isErrorCrimesByRadius}
        isFetching={isFetchingCrimesByRadius}
        error={errorCrimesByRadius}
      />
    </div>
  );
};

export default Api;

//Best practice error handling
//so errors naturallybubble upwards...do I have to have a try/catch block
//without tanstack, you use setState to get error - with tanstack it autaomtically has a variable to reference
//throwing a new error...this is for custom error messages? Again, how to format/put these in - where to put them in?
//would oyu throw new errors based on the error code, e.g. if 404 there is a problem with server
//if 'token expired' then 'you need to refresh your login' or something?

//count total amount of items returned in list

//go through list, take the category, and add to a new list (.map)
//go through this list, and remove any duplicates
//go through this list, and for eahc item, look through the response data, and count how many times it occurs

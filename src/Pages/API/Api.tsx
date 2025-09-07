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
import { LoadingCircle } from "../../Components/LoadingCircle/LoadingCircle";
import { CrimeData } from "../../Components/CrimeData/CrimeData";
//maybe as a stretch case, can make type=submit for button, then onsubmit check that date input has something, otherwise throw an alert
const Api: React.FC = () => {
  const [latitudeLongitude, setLatitudeLongitude] = useState<
    LatLng | undefined
  >();

  const [date, setDate] = useState<string>("");

  const {
    error,
    data,
    isFetching,
    isError,
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
      {isFetching && <LoadingCircle />}
      {isError && !isFetching && (
        <div>Error occurred: {(error as Error).message}</div>
      )}
      {data && !isError && !isFetching ? (
        // data.length === 0 ? (
        //   <p>No data exists for this selection</p>
        // ) : (
        //   <div>
        //     <h3>Crimes recorded at selected location</h3>
        //     {data.length}
        //   </div>
        // )
        <CrimeData title="Crimes at specific location" crimeData={data} />
      ) : null}
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

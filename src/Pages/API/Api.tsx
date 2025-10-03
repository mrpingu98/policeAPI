import React, { useState } from "react";
import Map from "../../Components/Map/Map";
import "../../Styling/components/map.scss";
import { LatLng } from "../../Types";
import { DatePickerMonth } from "../../Components/DatePickerMonth/DatePickerMonth";
import { Button } from "../../Components/Button/Button";
import "../../Styling/pages/api.scss";
import { getCurrentMonthAndYear } from "../../utils/dates/date";
import { getRequest } from "../../api/apiHelpers";
import { useQuery } from "@tanstack/react-query";
import { CrimeData } from "../../Components/CrimeData/CrimeData";
import { LoadingCircle } from "../../Components/LoadingCircle/LoadingCircle";
import { Error } from "../../Components/Error/Error";

//QUESTIONS
//Helper functions - abstracted out ?
//Simpler error handling - project wiould just have an error boundary to catch it and show error page?
//Conditoonal logic for rendering loader/error/crimeData - assume I can make it simpler?
//create helper function for useQuery?
//NavBar unit testing - how to mock different values for amocked import?
//navbar dropdown unit testing - use of NavBarDropdownTestUtils?
//crime query paramas helper function (Api page)

const Api: React.FC = () => {
  const [latitudeLongitude, setLatitudeLongitude] = useState<LatLng | undefined>();
  const [date, setDate] = useState<string>("");

  const crimeQueryParams = [
    { key: "date", value: date },
    {
      key: "lat",
      value: latitudeLongitude ? latitudeLongitude.lat.toString() : "0",
    },
    {
      key: "lng",
      value: latitudeLongitude ? latitudeLongitude.lng.toString() : "0",
    },
  ];
  const categoryQueryParams = [{ key: "date", value: date }];

  const {
    error: errorCrimesByLocation,
    data: dataCrimesByLocation,
    isFetching: isFetchingCrimesByLocation,
    isError: isErrorCrimesByLocation,
    refetch: refetchCrimesByLocation,
  } = useQuery({
    queryKey: ["getCrimesByLocation"],
    queryFn: () => getRequest("crimes-at-location", crimeQueryParams),
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
    queryFn: () => getRequest("crimes-street/all-crime", crimeQueryParams),
    enabled: false,
  });

  const {
    data: dataCrimeCategories,
    isFetching: isFetchingCrimeCategories,
    isError: isErrorCrimeCategories,
    error: errorCrimesByCategories,
    refetch: refetchCategories,
  } = useQuery({
    queryKey: ["getCrimeCategories"],
    queryFn: () => getRequest("crime-categories", categoryQueryParams),
    enabled: false,
  });

  const handleClick = async () => {
    refetchCategories();
    refetchCrimesByLocation();
    refetchCrimesByRadius();
  };

  return (
    <div className="desktopContainer">
      <div>
        <h1>Crimes by location</h1>
        <p className="description">
          Use the map below to find out about crimes by location across the UK. Pick a point on the map and input a date
          to find out the recorded crimes at that location at that time.
        </p>
        <Map setLatitudeLongitude={setLatitudeLongitude} />
      </div>
      <div className="selectionContainer">
        <div data-testid="location">
          <h2>Location</h2>
          <p>
            {latitudeLongitude ? (
              `Latitude: ${latitudeLongitude.lat.toFixed(5)}, Longitude: ${latitudeLongitude.lng.toFixed(5)}`
            ) : (
              <em>Select a point on the map</em>
            )}
          </p>
        </div>
        <div className="datePickerContainer" data-testid="datePicker">
          <h2>Date</h2>
          <DatePickerMonth setDate={setDate} name="date-picker" min="2023-01" max={getCurrentMonthAndYear()} />
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
      <div>
        {(isFetchingCrimeCategories || isFetchingCrimesByLocation) && <LoadingCircle />}
        {(isErrorCrimesByLocation || isErrorCrimeCategories) &&
          !isFetchingCrimeCategories &&
          !isFetchingCrimesByLocation && (
            <Error errorMessage="There was a problem fetching the crimes at this specific location. Please try again later." />
          )}
        {dataCrimeCategories &&
        dataCrimesByLocation &&
        !isFetchingCrimeCategories &&
        !isFetchingCrimesByLocation &&
        !isErrorCrimeCategories &&
        !isErrorCrimesByLocation ? (
          <CrimeData
            title="Crimes by specific location"
            crimeData={dataCrimesByLocation}
            isFetching={isFetchingCrimesByLocation}
            categories={dataCrimeCategories}
          />
        ) : null}
      </div>
      <div>
        {(isFetchingCrimeCategories || isFetchingCrimesByRadius) && <LoadingCircle />}
        {(isErrorCrimesByRadius || isErrorCrimeCategories) &&
          !isFetchingCrimeCategories &&
          !isFetchingCrimesByRadius && (
            <Error errorMessage="There was a problem fetching the crimes within a 1 mile radius of this location. Please try again later." />
          )}
        {dataCrimeCategories &&
        dataCrimesByRadius &&
        !isFetchingCrimeCategories &&
        !isFetchingCrimesByRadius &&
        !isErrorCrimeCategories &&
        !isErrorCrimesByRadius ? (
          <CrimeData
            title="Crimes within a 1 mile radius of selected location"
            crimeData={dataCrimesByRadius}
            isFetching={isFetchingCrimesByRadius}
            categories={dataCrimeCategories}
          />
        ) : null}
      </div>
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

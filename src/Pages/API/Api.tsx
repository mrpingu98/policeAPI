import React, { useState } from "react";
import Map from "../../Components/Map/Map";
import "../../Styling/components/map.scss";
import { CrimeCategories, CrimeDataResponse, LatLng } from "../../Types";
import { DatePickerMonth } from "../../Components/DatePickerMonth/DatePickerMonth";
import { Button } from "../../Components/Button/Button";
import "../../Styling/pages/api.scss";
import { getCurrentMonthAndYear } from "../../utils/dates/date";
import { queryResult, useGetQuery } from "../../api/apiHelpers";
import { CrimeData } from "../../Components/CrimeData/CrimeData";
import { LoadingCircle } from "../../Components/LoadingCircle/LoadingCircle";
import { Error } from "../../Components/Error/Error";
import { crimeCategoriesUrl, crimesByLocationUrl, crimesByRadiusUrl } from "../../constants/api";

//QUESTIONS
//api unit testing - spyon()

//NavBar unit testing - how to mock different values for a mocked import?
//navbar dropdown unit testing - use of NavBarDropdownTestUtils?

//crime query paramas helper function? (Api page)

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
    loading: loadingCrimesRadius,
    dataFetched: dataFetchedCrimesRadius,
    data: dataCrimesRadius,
    isError: isErrorCrimesRadius,
    refetch: refetchCrimesRadius,
  } = queryResult<CrimeDataResponse[]>(useGetQuery("getCrimesByRadius", crimesByRadiusUrl, crimeQueryParams));

  const {
    loading: loadingCrimesLocation,
    dataFetched: dataFetchedCrimesLocation,
    data: dataCrimesLocation,
    isError: isErrorCrimesLocation,
    refetch: refetchCrimesLocation,
  } = queryResult<CrimeDataResponse[]>(useGetQuery("getCrimesByLocation", crimesByLocationUrl, crimeQueryParams));

  const {
    loading: loadingCrimeCategories,
    dataFetched: dataFetchedCrimeCategories,
    data: dataCrimeCategories,
    isError: isErrorCrimeCategories,
    refetch: refetchCrimeCategories,
  } = queryResult<CrimeCategories[]>(useGetQuery("getCrimesByCategories", crimeCategoriesUrl, categoryQueryParams));

  const handleSubmit = async () => {
    refetchCrimeCategories();
    refetchCrimesLocation();
    refetchCrimesRadius();
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
            onClick={handleSubmit}
            disabled={latitudeLongitude && date ? false : true}
          />
        </div>
      </div>
      <div>
        {(loadingCrimesLocation || loadingCrimeCategories) && <LoadingCircle />}
        {(isErrorCrimesLocation || isErrorCrimeCategories) && (
          <Error errorMessage="There was a problem fetching the crimes at this specific location. Please try again later." />
        )}
        {dataFetchedCrimesLocation && dataCrimesLocation && dataFetchedCrimeCategories && dataCrimeCategories ? (
          <CrimeData
            title="Crimes by specific location"
            crimeData={dataCrimesLocation}
            categories={dataCrimeCategories}
          />
        ) : null}
      </div>
      <div>
        {(loadingCrimesRadius || loadingCrimeCategories) && <LoadingCircle />}
        {(isErrorCrimesRadius || isErrorCrimeCategories) && (
          <Error errorMessage="There was a problem fetching the crimes within a 1 mile radius of this location. Please try again later." />
        )}
        {dataFetchedCrimesRadius && dataCrimesRadius && dataFetchedCrimeCategories && dataCrimeCategories ? (
          <CrimeData
            title="Crimes within a 1 mile radius of selected location"
            crimeData={dataCrimesRadius}
            categories={dataCrimeCategories}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Api;

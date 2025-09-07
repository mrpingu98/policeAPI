import React from "react";
import "../../Styling/components/crimeData.scss";
import { LoadingCircle } from "../LoadingCircle/LoadingCircle";

interface CrimeDataProps {
  title: string;
  crimeData: object[];
  isError: boolean;
  isFetching: boolean;
  error: Error | null;
}

const CrimeData: React.FC<CrimeDataProps> = ({
  title,
  crimeData,
  isError,
  isFetching,
  error,
}) => {
  return (
    <div className="crimeDataContainer">
      {isFetching && <LoadingCircle />}
      {isError && !isFetching && (
        <div>Error occurred: {(error as Error).message}</div>
      )}
      {crimeData && !isError && !isFetching ? (
        <>
          <h1>{title}</h1>
          {crimeData.length === 0 ? (
            <p>No data exists for this selection</p>
          ) : (
            <div>
              <h3>Total number of crimes</h3>
              {crimeData.length}
            </div>
          )}
        </>
      ) : null}
    </div>
  );
};

export { CrimeData };

// {crimeData.length === 0 ? (
//     <p>No data exists for this selection</p>
//   ) : (
//     <div>
//       <h3>Total number of crimes</h3>
//       {crimeData.length}
//     </div>
//   )}

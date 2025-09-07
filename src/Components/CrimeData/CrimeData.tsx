import React from "react";
import "../../Styling/components/crimeData.scss";

interface CrimeDataProps {
  title: string;
  crimeData: object[];
}

const CrimeData: React.FC<CrimeDataProps> = ({ title, crimeData }) => {
  return (
    <div className="crimeDataContainer">
      <h1>{title}</h1>
      {crimeData.length === 0 ? (
        <p>No data exists for this selection</p>
      ) : (
        <div>
          <h3>Total number of crimes</h3>
          {crimeData.length}
        </div>
      )}
    </div>
  );
};

export { CrimeData };

import React, { useEffect, useState } from "react";
import "../../Styling/components/crimeData.scss";
import { CrimeCategoryTotals } from "../../Types";
import { getNumberOfCrimesByCategory } from "./helpers";
import { CrimeDataProps } from "../../Interfaces";

const CrimeData: React.FC<CrimeDataProps> = ({ title, crimeData, categories }) => {
  const [crimeCategoryTotals, setCrimeCategoryTotals] = useState<CrimeCategoryTotals[]>([]);

  const getCrimesByCategory = () => {
    const numberOfCrimesByCategory = getNumberOfCrimesByCategory(categories, crimeData);
    setCrimeCategoryTotals(numberOfCrimesByCategory);
  };

  useEffect(() => {
    if (crimeData && categories) {
      getCrimesByCategory();
    }
  }, [crimeData, categories]);

  return (
    <div className="crimeDataContainer">
      <h1>{title}</h1>
      {crimeData.length === 0 ? (
        <p>No data exists for this selection</p>
      ) : (
        <div>
          <table className="table">
            <tbody>
              <tr>
                <th>Category</th>
                <th>No. </th>
              </tr>
              {crimeCategoryTotals.map((crime) => (
                <tr key={crime.category}>
                  <td>{`${crime.category}`}</td>
                  <td>{`${crime.amount}`}</td>
                </tr>
              ))}
              <tr>
                <td>Total</td>
                <td>{`${crimeData.length}`}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export { CrimeData };

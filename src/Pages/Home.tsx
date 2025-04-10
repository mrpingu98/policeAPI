import React from "react";
import "../Styling/pages/home.scss";

const Home: React.FC = () => {
  return (
    <>
      <div className="titleContainer">
        <div>
          <p>
            This website uses the UK Police API to gather data about crime and
            policing across England, Wales and Northern Ireland
          </p>
          <p>Head to the API page to find out about crime in your local area</p>
        </div>
      </div>
    </>
  );
};

export { Home };

import React from "react";
import policeLogo from "../ukPoliceLogo.jpg";

const Home: React.FC = () => {
  return (
    <div className="centre">
      <p>
        This website uses the UK Police API to gather data about crime and
        policing across England, Wales and Northern Ireland
      </p>
      <p>Head to the API page to find out about crime in your local area</p>
      <img src={policeLogo} alt="police logo" />
    </div>
  );
};

export { Home };

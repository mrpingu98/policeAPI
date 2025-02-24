import React from "react";
import "../Styling/main.scss";
import { Button } from "../Components/Button";

const Home: React.FC = () => {
  return (
    <div className="centre">
      <h1>Portfolio / POLICE API?</h1>
      <p>This is a personal project made by.... brief explanation of site?</p>
      <Button text={"hello"} onClick={() => console.log("button clicked")} />
    </div>
  );
};

export { Home };

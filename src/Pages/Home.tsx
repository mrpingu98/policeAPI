import React from "react";
import { NavBar } from "../Components/NavBar";

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="centre">
        <h1>Portfolio / POLICE API?</h1>
        <p>This is a personal project made by.... brief explanation of site?</p>
      </div>
    </>
  );
};

export { Home };

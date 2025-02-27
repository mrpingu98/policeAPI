import React from "react";
import { Button } from "./Button";
import "../Styling/components/navbar.scss";

const NavBar: React.FC = () => {
  return (
    <div className="navBar">
      <Button
        text={"Home"}
        onClick={() => console.log("Home button clicked")}
      />
      <Button
        text={"Police API"}
        onClick={() => console.log("Police API button clicked")}
      />
    </div>
  );
};
export { NavBar };

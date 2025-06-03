import React from "react";
import "../Styling/components/navbar.scss";
import { Link } from "react-router-dom";
import { Routes } from "./Types";
import { Dropdown } from "./Dropdown/Dropdown";

const NavBar: React.FC = () => {
  const routes: Routes[] = [
    { routeUrl: "#", name: "Home" },
    { routeUrl: "#", name: "API" },
    { routeUrl: "#", name: "CV" },
  ];
  return (
    <>
      <div>
        {routes.map((route, index) => (
          <Link to={route.routeUrl} key={index} className="navLink">
            {route.name}
          </Link>
        ))}
      </div>
      <div className="navDropdown">
        <Dropdown dropdownOptions={routes} />
      </div>
    </>
  );
};
export { NavBar };

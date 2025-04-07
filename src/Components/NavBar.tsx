import React from "react";
import "../Styling/components/navbar.scss";
import { Link } from "react-router-dom";
import { Routes } from "./Types";

const NavBar: React.FC = () => {
  const routes: Routes[] = [
    { routeUrl: "#", name: "Home" },
    { routeUrl: "#", name: "API" },
    { routeUrl: "#", name: "CV" },
  ];
  return (
    <div>
      {routes.map((route, index) => (
        <Link to={route.routeUrl} key={index} className="navLink">
          {route.name}
        </Link>
      ))}
    </div>
  );
};
export { NavBar };

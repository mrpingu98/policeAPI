import React from "react";
import "../../Styling/components/navbar.scss";
import { Link } from "react-router-dom";
import { Routes } from "../Types";
import { Dropdown } from "../Dropdown/Dropdown";
import { useIsMobile } from "../../Hooks/useIsMobile";

const NavBar: React.FC = () => {
  const routes: Routes[] = [
    { routeUrl: "#", name: "Home" },
    { routeUrl: "#", name: "API" },
    { routeUrl: "#", name: "CV" },
  ];

  const isMobileView = useIsMobile();

  return (
    <div>
      {isMobileView ? (
        <div className="navDropdown" data-testid="nav-dropdown">
          <Dropdown dropdownOptions={routes} />
        </div>
      ) : (
        routes.map((route, index) => (
          <Link
            to={route.routeUrl}
            key={index}
            className="navLink"
            data-testid="nav-links"
          >
            {route.name}
          </Link>
        ))
      )}
    </div>
  );
};
export { NavBar };

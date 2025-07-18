import React from "react";
import "../../Styling/components/navbar.scss";
import { Link } from "react-router-dom";
import { Routes } from "../Types";
import { NavbarDropdown } from "../NavbarDropdown/NavbarDropdown";
import { useIsMobile } from "../../Hooks/useIsMobile";
import { NonEmptyArray } from "../Types";

const NavBar: React.FC = () => {
  const routes: NonEmptyArray<Routes> = [
    { routeUrl: "#", name: "Home" },
    { routeUrl: "#", name: "API" },
  ];

  const isMobileView = useIsMobile();

  return (
    <div>
      {isMobileView ? (
        <div className="navDropdown" data-testid="nav-dropdown">
          <NavbarDropdown dropdownOptions={routes} />
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

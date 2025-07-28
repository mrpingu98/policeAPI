import React, { useEffect } from "react";
import "../../Styling/components/navbar.scss";
import { Link } from "react-router-dom";
import { Routes } from "../Types";
import { NavbarDropdown } from "../NavbarDropdown/NavbarDropdown";
import { useIsMobile } from "../../Hooks/useIsMobile";
import { NonEmptyArray } from "../Types";

const NavBar: React.FC = () => {
  const [safeRoutesArray, setSafeRoutesArray] = React.useState<Routes[]>([]);

  const routes: NonEmptyArray<Routes> = [
    { routeUrl: "#", name: "Home" },
    { routeUrl: "#", name: "API" },
  ];

  const isMobileView = useIsMobile();

  const filterRoutesArray = () => {
    const safeRoutes = routes.filter(
      (route) => route.name.trim() && route.routeUrl.trim()
    );
    setSafeRoutesArray(safeRoutes);
  };

  useEffect(() => {
    filterRoutesArray();
  }, []);

  return (
    <div>
      {safeRoutesArray &&
        safeRoutesArray.length > 0 &&
        (isMobileView ? (
          <div className="navDropdown" data-testid="nav-dropdown">
            <NavbarDropdown routesArray={routes} />
            <div />
          </div>
        ) : (
          safeRoutesArray.map((route, index) => (
            <Link
              to={route.routeUrl}
              key={index}
              className="navLink"
              data-testid="nav-links"
            >
              {route.name}
            </Link>
          ))
        ))}
      {safeRoutesArray && safeRoutesArray.length == 0 && (
        <div className="navbarMinimumHeight" />
      )}
    </div>
  );
};
export { NavBar };

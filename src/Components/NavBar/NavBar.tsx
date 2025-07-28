import React, { useEffect } from "react";
import "../../Styling/components/navbar.scss";
import { Link } from "react-router-dom";
import { Routes } from "../Types";
import { NavbarDropdown } from "../NavbarDropdown/NavbarDropdown";
import { useIsMobile } from "../../Hooks/useIsMobile";
import { navRoutes } from "../../constants/navRoutes";

const NavBar: React.FC = () => {
  const [safeRoutesArray, setSafeRoutesArray] = React.useState<Routes[]>([]);

  const isMobileView = useIsMobile();

  const filterRoutesArray = () => {
    const safeRoutes = navRoutes.filter(
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
            <NavbarDropdown routesArray={safeRoutesArray} />
            <div />
          </div>
        ) : (
          safeRoutesArray.map((route, index) => (
            <Link
              to={route.routeUrl}
              key={index}
              className="navLink"
              data-testid={`nav-links-${index}`}
            >
              {route.name}
            </Link>
          ))
        ))}
      {safeRoutesArray && safeRoutesArray.length == 0 && (
        <div
          className="navbarMinimumHeight"
          data-testid="navbar-invalid-routes"
        />
      )}
    </div>
  );
};
export { NavBar };

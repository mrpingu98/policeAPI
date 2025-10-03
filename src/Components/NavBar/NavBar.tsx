import React from "react";
import "../../Styling/components/navbar.scss";
import { Link } from "react-router-dom";
import { NavbarDropdown } from "../NavbarDropdown/NavbarDropdown";
import { useIsMobile } from "../../Hooks/useIsMobile/useIsMobile";
import { navRoutes } from "../../constants/navRoutes";
import { checkRoutesArrayItemsAreSafe } from "../../utils/arrays/arrays";

const NavBar: React.FC = () => {
  const isMobileView = useIsMobile();
  const safeRoutesArray = checkRoutesArrayItemsAreSafe(navRoutes);

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
            <Link to={route.routeUrl} key={index} className="navLink" data-testid={`nav-links-${index}`}>
              {route.name}
            </Link>
          ))
        ))}
      {safeRoutesArray && safeRoutesArray.length == 0 && (
        <div className="navbarMinimumHeight" data-testid="navbar-invalid-routes" />
      )}
    </div>
  );
};
export { NavBar };

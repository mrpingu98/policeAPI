import React, { useEffect, useRef } from "react";
import "../../Styling/components/dropdown.scss";
import "../../Styling/components/navbarDropdownButton.scss";
import { Link } from "react-router-dom";
import { NavbarDropdownButton } from "../NavbarDropdownButton";
import { checkRoutesArrayItemsAreSafe } from "../../utils/arrays/arrays";
import { DropdownProps } from "../../Interfaces";
//make. navbar close when an option is clicked
const NavbarDropdown: React.FC<DropdownProps> = ({ routesArray }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const safeRoutesArray = checkRoutesArrayItemsAreSafe(routesArray);

  const handleOpenDropdown = () => {
    setOpen(!open);
  };

  const handleClickOutsideDropdown = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      window.addEventListener("click", handleClickOutsideDropdown);
    }
    return () => window.removeEventListener("click", handleClickOutsideDropdown);
  }, [open]);

  return (
    <div ref={dropdownRef} className="dropdownContainer" data-testid="dropdown-container">
      {safeRoutesArray.length > 0 && <NavbarDropdownButton onClick={handleOpenDropdown} />}
      {open ? (
        <ul className="ulContainer" data-testid="dropdown-ul-container">
          {safeRoutesArray.map((route, index) => (
            <li key={index} className="liContainer" data-testid="dropdown-li-container">
              <Link
                to={route.routeUrl}
                className="dropdownLink"
                data-testid={`dropdown-link-${index}`}
                onClick={() => setOpen(false)}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
export { NavbarDropdown };

import React, { useEffect, useRef } from "react";
import "../../Styling/components/dropdown.scss";
import "../../Styling/components/button.scss";
import { Routes } from "../Types";
import { Link } from "react-router-dom";
import { Button } from "../Button";

interface DropdownProps {
  dropdownOptions: Routes[];
}

const NavbarDropdown: React.FC<DropdownProps> = ({ dropdownOptions }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdown = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleClickOutsideDropdown = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      window.addEventListener("click", handleClickOutsideDropdown);
    }

    return () =>
      window.removeEventListener("click", handleClickOutsideDropdown);
  }, [open]);

  return (
    <div
      ref={dropdownRef}
      className="dropdownContainer"
      data-testid="dropdown-container"
    >
      <Button
        icon={
          <>
            <div className="dropdownIcon" />
            <div className="dropdownIcon" />
            <div className="dropdownIcon" />
          </>
        }
        onClick={handleDropdown}
        className={open ? "dropdownButtonOpen" : "dropdownButtonClose"}
        datatestId="dropdown-button"
      />
      {open ? (
        <ul className="ulContainer" data-testid="dropdown-ul-container">
          {dropdownOptions.map((route, index) => (
            <li
              key={index}
              className="liContainer"
              data-testid="dropdown-li-container"
            >
              <Link
                to={route.routeUrl}
                className="dropdownLink"
                data-testid={`dropdown-link-${index}`}
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

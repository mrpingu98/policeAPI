import React from "react";
import "../../Styling/components/dropdown.scss";
import "../../Styling/components/button.scss";
import { Routes } from "../Types";
import { Link } from "react-router-dom";

interface DropdownProps {
  dropdownOptions: Routes[];
}

const Dropdown: React.FC<DropdownProps> = ({ dropdownOptions }) => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div className="dropdownContainer" data-testid="dropdown-container">
      <button
        data-testid="dropdown-button"
        className={open ? "dropdownButtonOpen" : "dropdownButtonClose"}
        onClick={() => setOpen(!open)}
      >
        <div className="dropdownIcon" />
        <div className="dropdownIcon" />
        <div className="dropdownIcon" />
      </button>
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
export { Dropdown };

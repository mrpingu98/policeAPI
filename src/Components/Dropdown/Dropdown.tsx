import React, { useEffect, useRef } from "react";
import "../../Styling/components/dropdown.scss";
import "../../Styling/components/button.scss";
import { Routes } from "../Types";
import { Link } from "react-router-dom";

interface DropdownProps {
  dropdownOptions: Routes[];
}

const Dropdown: React.FC<DropdownProps> = ({ dropdownOptions }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("useEffect ran");
    console.log(open);
    const handleClickOutsideDropdown = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        console.log("handleclick completed");
      }
    };

    if (open) {
      window.addEventListener("click", handleClickOutsideDropdown);
    }

    return () =>
      window.removeEventListener("click", handleClickOutsideDropdown);
  }, [open]);

  //need to explain the above

  return (
    <div
      ref={dropdownRef}
      className="dropdownContainer"
      data-testid="dropdown-container"
    >
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

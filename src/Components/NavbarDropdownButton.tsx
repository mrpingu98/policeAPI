import React from "react";
import "../Styling/components/navbarDropdownButton.scss";

interface NavbarDropdownButtonProps {
  onClick: () => void;
}

const NavbarDropdownButton: React.FC<NavbarDropdownButtonProps> = ({
  onClick,
}) => {
  return (
    <>
      <button
        data-testid="navbar-dropdown-button"
        className={"dropdownButton"}
        onClick={onClick}
      >
        <div className="dropdownIcon" />
        <div className="dropdownIcon" />
        <div className="dropdownIcon" />
      </button>
    </>
  );
};

export { NavbarDropdownButton };

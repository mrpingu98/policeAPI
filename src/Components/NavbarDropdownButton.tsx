import React from "react";
import "../Styling/components/navbarDropdownButton.scss";

interface NavbarDropdownButtonProps {
  datatestid?: string;
  onClick: () => void;
}

const NavbarDropdownButton: React.FC<NavbarDropdownButtonProps> = ({
  onClick,
  datatestid,
}) => {
  return (
    <>
      <button
        data-testId={datatestid}
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

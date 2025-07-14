import React from "react";
import "../Styling/components/navbarDropdownButton.scss";

interface NavbarDropdownButtonProps {
  datatestid?: string;
  onClick: () => void;
  className: string;
}

const NavbarDropdownButton: React.FC<NavbarDropdownButtonProps> = ({
  onClick,
  className,
  datatestid,
}) => {
  return (
    <>
      <button data-testId={datatestid} className={className} onClick={onClick}>
        <div className="dropdownIcon" />
        <div className="dropdownIcon" />
        <div className="dropdownIcon" />
      </button>
    </>
  );
};

export { NavbarDropdownButton };

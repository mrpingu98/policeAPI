import React from "react";
import "../Styling/components/navbar.scss";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div className="navBar">
      <Link to="#" className="navLink">
        Home
      </Link>
      <Link to="#" className="navLink">
        API
      </Link>
    </div>
  );
};
export { NavBar };

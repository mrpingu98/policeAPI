import React from "react";
import "../Styling/components/navbar.scss";
import { Link } from "react-router-dom";
import { Dropdown } from "./Dropdown";
import { Routes } from "./Types";

const NavBar: React.FC = () => {
  const routes: Routes[] = [
    { routeUrl: "#", name: "Home" },
    { routeUrl: "#", name: "API" },
    { routeUrl: "#", name: "CV" },
  ];

  // const [open, setOpen] = React.useState<boolean>(false);

  return (
    <>
      <div className="navBar">
        {routes.map((route, index) => (
          <Link key={index} to={route.routeUrl} className="navLink">
            {route.name}
          </Link>
        ))}
      </div>
      <div className="navDropdown">
        <Dropdown dropdownOptions={routes} />
      </div>
    </>
  );
};
export { NavBar };

//make a three lined component to put in the button

//  <button onClick={() => setOpen(!open)}>test</button>;
//  {
//    open ? (
//      <ul>
//        {links.map((z, index) => (
//          <li key={index}>{z.name}</li>
//        ))}
//      </ul>
//    ) : null;
//  }

//on hover, container appears with columsn and rows
//on click continer shows, offclick container disappears (display none:)
//z-index above everything else
//each row is link
//dropdown component to be made for this
//do it step-by-step - and do small commits on it

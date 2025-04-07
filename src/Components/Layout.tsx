import React, { ReactNode } from "react";
import "../Styling/layout/layout.scss";
import { NavBar } from "./NavBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="mainContainer">
        <div className="titleRow">
          <div />
          <h1 className="secondColumn">POLICE API</h1>
          <div />
        </div>
        <div className="navbarRow">
          <div />
          <NavBar />
          <div />
        </div>
        <main className="contentRow">
          <div />
          <div className="secondColumn">{children}</div>
          <div />
        </main>
      </div>
    </>
  );
};

export { Layout };

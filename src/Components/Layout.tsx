import React, { ReactNode } from "react";
import "../Styling/layout/layout.scss";
import { NavBar } from "./NavBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="container">
        <div className="bannerRow">
          <div />
          <h1>POLICE API</h1>
          <div />
        </div>
        <div className="navbarRow">
          <div />
          <NavBar />
          <div />
        </div>
        <main className="contentRow">
          <div />
          {children}
          <div />
        </main>
      </div>
    </>
  );
};

export { Layout };

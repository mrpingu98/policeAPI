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
        <div className="bannerGrid" />
        <div className="navbarGrid">
          <NavBar />
        </div>
        <main className="contentGrid">{children}</main>
      </div>
    </>
  );
};

export { Layout };

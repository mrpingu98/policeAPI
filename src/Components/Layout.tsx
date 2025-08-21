import React, { ReactNode } from "react";
import "../Styling/layout/layout.scss";
import { NavBar } from "./NavBar/NavBar";
import { Footer } from "./Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="mainContainer">
        <div className="titleRow">
          <div />
          <h1 className="secondColumn noMarginBottom">POLICE API</h1>
          <div />
        </div>
        <div className="navbarRow">
          <div />
          <div>
            <NavBar />
          </div>
          <div />
        </div>
        <main className="contentRow">
          <div />
          <div className="secondColumn">{children}</div>
          <div />
        </main>
        <div className="footerRow">
          <div />
          <div>
            <Footer />
          </div>
          <div />
        </div>
      </div>
    </>
  );
};

export { Layout };

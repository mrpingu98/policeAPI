import React, { ReactNode } from "react";
import "../Styling/layout/layout.scss";
import { NavBar } from "./NavBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="main">{children}</main>
    </>
  );
};

export { Layout };

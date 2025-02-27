import React, { ReactNode } from "react";
import "../Styling/layout/layout.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <main className="main">{children}</main>;
};

export { Layout };

import React from "react";
import Navbar from "./Navbar";

type MainComponent = {
  children: React.ReactNode;
};

const Layout: React.FC<MainComponent> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;

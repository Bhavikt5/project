import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ width: "100%", padding: "0px 50px 0px 40px" }}>
        <Navbar name="orders" />
        {children}
      </div>
    </div>
  );
};

export default Layout;

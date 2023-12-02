// Layout.jsx
import React from "react";
import Navbar from "./Navbar"; // Update the path based on your project structure

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="content">{children}</div>
      {/* You can add a footer or other common elements here */}
    </div>
  );
};

export default Layout;

import React from "react";
import Navbar from "../components/Home/Navbar";

const Template = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Template;

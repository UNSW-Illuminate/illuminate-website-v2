import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const Template = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Template;

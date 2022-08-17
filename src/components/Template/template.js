import React, { useRef } from "react";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";

const Template = ({ children, currentPage }) => {
  return (
    <>
      <Navbar currentPage={currentPage} />
      {children}
      <Footer />
    </>
  );
};

export default Template;

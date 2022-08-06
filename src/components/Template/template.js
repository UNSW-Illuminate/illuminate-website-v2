import React, { useRef } from "react";
import Navbar from "../Home/Navbar";

const Template = ({ children, currentPage }) => {
  return (
    <>
      <Navbar currentPage={currentPage} />
      {children}
    </>
  );
};

export default Template;

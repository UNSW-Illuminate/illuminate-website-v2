import React, { useRef } from "react";
import Navbar from "../Home/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Template = ({ children, currentPage }) => {
  return (
    <>
      <Navbar currentPage={currentPage} />
      {children}
      <ToastContainer theme="dark" />
    </>
  );
};

export default Template;

import React, { useRef } from "react";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Template = ({ children, currentPage }) => {
  return (
    <>
      <Navbar currentPage={currentPage} />
      {children}
      <ToastContainer theme="dark" />
      <Footer />
    </>
  );
};

export default Template;

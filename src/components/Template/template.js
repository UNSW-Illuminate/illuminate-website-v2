import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import SocialLinks from "../Home/SocialLinks";

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

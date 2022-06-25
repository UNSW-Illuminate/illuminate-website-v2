import React from "react";
import ContactCard from "../components/ContactCard/contactCard";
import Navbar from "../components/Home/Navbar";
import "./styles/contact.scss";

const Contact = () => (
  <div className="snapContainer">
    <div className="snapElement">
      <Navbar />
      <div className="banner">Contact us</div>
    </div>
    <ContactCard className="snapElement" />
  </div>
);

export default Contact;

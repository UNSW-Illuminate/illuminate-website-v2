import React from "react";
import ContactCard from "../components/Contact/contactCard";
import Navbar from "../components/Home/Navbar";
import Template from "../components/Template/template";
import * as styles from "../components/Contact/contactCard.module.scss";

const Contact = () => (
  <Template currentPage="contact">
    <title>Contact | UNSW Illuminate</title>
    <div className={styles.wrapper}>
      <ContactCard className="snapElement" />
    </div>
  </Template>
);

export default Contact;

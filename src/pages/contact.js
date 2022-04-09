import React from "react";
import ContactCard from "../components/ContactCard/contactCard";
import Template from "../components/Template/template";
import './styles/Contact.scss'

const Contact = () => (
  <Template>
        <div className="banner">Contact us</div>
        <ContactCard />
  </Template>
);

export default Contact;

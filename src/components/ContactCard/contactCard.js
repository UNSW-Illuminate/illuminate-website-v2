import React from "react";
import "./contactCard.scss";
import emailLogo from "../../images/email.svg";
import arc from "../../images/arc.svg";
import discord from "../../images/discord.svg";
import facebook from "../../images/facebook.svg";
import linkedin from "../../images/linkedin.svg";
import instagram from "../../images/instagram.svg";
import { motion } from "framer-motion";

const ContactCard = () => {
  return (
    <>
      <div className="container">
        <div className="leftContainer">
          <h2 className="heading">Get in Touch!</h2>
          <p>Feel free to message us if you have any questions,</p>
          <p> whether it's about joining the team or sponsoring us!</p>
          <div className="emailSection">
            <img
              className="emailLogo"
              src={emailLogo}
              height="36px"
              width="36px"
            />
            <div>
              <a href="mailto:admin@unswilluminate.com">
                admin@unswilluminate.com
              </a>
            </div>
          </div>
          <h2 className="subheading">Join us</h2>
          <motion.img
            src={arc}
            height="100px"
            width="100px"
            whileHover={{ scale: 1.2 }}
          />
          <motion.img
            src={discord}
            height="100px"
            width="100px"
            whileHover={{ scale: 1.2 }}
          />
          <h2 className="subheading">Stay updated</h2>
          <motion.img
            src={facebook}
            height="100px"
            width="100px"
            whileHover={{ scale: 1.2 }}
          />
          <motion.img
            src={linkedin}
            height="100px"
            width="100px"
            whileHover={{ scale: 1.2 }}
          />
          <motion.img
            src={instagram}
            height="100px"
            width="100px"
            whileHover={{ scale: 1.2 }}
          />
        </div>
        <div className="rightContainer">
          <form
            id="infoCard"
            action="https://formcarry.com/s/ott2r2kWXHeH"
            method="POST"
          >
            <div className="label">Name</div>
            <input />
            <div className="label">Email</div>
            <input />
            <div className="label">Message</div>
            <textarea />
            <motion.button whileHover={{ scale: 1.1 }} type="submit">
              Send
            </motion.button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactCard;

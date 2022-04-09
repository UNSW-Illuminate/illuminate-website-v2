import React from "react";
import "./contactCard.scss";
import email from "../../images/email.svg";
import arc from "../../images/arc.svg";
import discord from "../../images/discord.svg";
import facebook from "../../images/facebook.svg";
import linkedin from "../../images/linkedin.svg";
import instagram from "../../images/instagram.svg";
import { motion } from "framer-motion";

const ContactCard = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const sendMessage = () => {};
  return (
    <>
      <div className="container">
        <div className="leftContainer">
          <h2 className="heading">Get in Touch!</h2>
          <p>
            Feel free to message us if you have any questions, whether it's
            about joining the team or sponsoring us!
          </p>
          <div className="emailSection">
            <img className="emailLogo" src={email} height="36px" width="36px" />
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
          <div id="infoCard">
            <div className="label">Name</div>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <div className="label">Email</div>
            <input
              name={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className="label">Message</div>
            <textarea
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <motion.button whileHover={{ scale: 1.1 }} onClick={sendMessage}>
              Send
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;

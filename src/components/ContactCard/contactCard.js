import React from "react";
import "./contactCard.scss";
import emailLogo from "../../images/email.svg";
import arc from "../../images/arc.svg";
import discord from "../../images/discord.svg";
import facebook from "../../images/facebook.svg";
import linkedin from "../../images/linkedin.svg";
import instagram from "../../images/instagram.svg";
import { motion } from "framer-motion";
import { useForm } from "@formcarry/react";

// TODO: make card to fit into viewport, snap effect
// TODO:make send button works
// TODO:change button text into send after a while
const ContactCard = () => {
  const { state, submit } = useForm({
    id: "BmU1uVutW95",
  });
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const handleSubmit = (e) => {
    submit(e);
    setEmail("");
    setName("");
    setMessage("");
  };

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
          <form id="infoCard" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <motion.button whileHover={{ scale: 1.1 }} type="submit">
              {state.submitted ? "We've got your message!" : "Send"}
            </motion.button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactCard;

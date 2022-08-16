import React from "react";
import * as styles from "./contactCard.module.scss";
import emailLogo from "../../images/email.svg";
import arc from "../../images/arc.svg";
import discord from "../../images/discord.svg";
import facebook from "../../images/facebook.svg";
import linkedin from "../../images/linkedin.svg";
import instagram from "../../images/instagram.svg";
import { motion } from "framer-motion";
import { useForm } from "@formcarry/react";
import { toast } from "react-toastify";

const ContactCard = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://formcarry.com/s/ott2r2kWXHeH", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    }).then((resp) => {
      if (resp.ok) {
        toast.success(
          "Your message has been sent! We'll get back to you as soon as possible!",
          { autoClose: 4000 }
        );
        setEmail("");
        setName("");
        setMessage("");
      } else {
        toast.error(
          "Sorry, there was an error sending your message. Please email us directly.",
          { autoClose: 4000 }
        );
      }
    });
  };

  // if (state.submitted) {
  //   toast.success(
  //     "Your message has been sent! We'll get back to you as soon as possible.",
  //     { autoClose: 5000 }
  //   );
  //   console.log("firshellt");
  // }

  return (
    <>
      <motion.div
        className={styles.container}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className={styles.leftContainer}>
          <h2 className={styles.heading}>Get in Touch!</h2>
          <p className={styles.instructions}>
            Feel free to message us if you have any questions, whether it's
            about joining the team or sponsoring us!
          </p>
          <div className={styles.emailSection}>
            <img
              className={styles.emailLogo}
              src={emailLogo}
              height="36px"
              width="36px"
            />
            <a href="mailto:admin@unswilluminate.com">
              admin@unswilluminate.com
            </a>
          </div>
          <h2 className={styles.subheading}>Join us</h2>
          <div className={styles.socialsContainer}>
            <a
              href="https://member.arc.unsw.edu.au/s/clubdetail?clubid=0016F00003nK4vfQAC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                src={arc}
                height="70px"
                width="70px"
                whileHover={{ scale: 1.2 }}
              />
            </a>
            <a
              href="https://discord.gg/2yKHQYxk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                src={discord}
                height="70px"
                width="70px"
                whileHover={{ scale: 1.2 }}
              />
            </a>
          </div>

          <h2 className={styles.subheading}>Stay updated</h2>
          <div className={styles.socialsContainer}>
            <a
              href="https://www.facebook.com/unsw.illuminate/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                src={facebook}
                height="70px"
                width="70px"
                whileHover={{ scale: 1.2 }}
              />
            </a>
            <a
              href="https://au.linkedin.com/company/project-illuminate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                src={linkedin}
                height="70px"
                width="70px"
                whileHover={{ scale: 1.2 }}
              />
            </a>
            <a
              href="https://www.instagram.com/unswilluminate/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                src={instagram}
                height="70px"
                width="70px"
                whileHover={{ scale: 1.2 }}
              />
            </a>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <form id={styles.infoCard} onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button type="submit">Send</button>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default ContactCard;

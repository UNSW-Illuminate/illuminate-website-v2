import { Link } from "gatsby";
import React from "react";
import "./styles/SocialLinks.scss";
import {FaFacebookF} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaDiscord} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";

const SocialLinks = () => {
    return (
        <div className="social-links-container">
            <div className="heading">
                Get in Touch!
            </div>
            <div className="icons-container">
                <Link to="https://www.facebook.com/unsw.illuminate/" className="icon-link">
                    <div className="icon">
                        <FaFacebookF/>
                    </div>
                </Link>
                <Link to="https://www.instagram.com/unswilluminate/" className="icon-link">
                    <div className="icon">
                        <FaInstagram/>
                    </div>
                </Link>
                <Link to="https://discord.gg/g6fcmh3Q8c" className="icon-link">
                    <div className="icon">
                        <FaDiscord/>
                    </div>
                </Link>
                <Link to="https://www.linkedin.com/company/project-illuminate/" className="icon-link">
                    <div className="icon">
                        <FaLinkedinIn/>
                    </div>
                </Link>
            </div>

            <Link to="/contact" className="link">
                <div className="contact-button">
                    Contact us
                </div>
            </Link>
        </div>
      );
};

export default SocialLinks;

import { Link } from "gatsby";
import * as React from "react";
import "./styles/Footer.scss";
import Illuminate from "../../images/logo.png";
import Logo from "./Logo";
import ArcLogoWhite from "../../images/arcLogoWhiteOutline.png";
import ArcLogoGreen from "../../images/arcLogoGreenOutline.png";
import {FaFacebookF} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaDiscord} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-information">
        <div className="footer-icons">
          <div className="footer-illuminate">
            <Logo title="illuminateLogo" original={Illuminate} />
            <p id="IlluminateText">UNSW Illuminate</p>
          </div>
          <div className="footer-media">
            <Link to="https://www.arc.unsw.edu.au/">
              <div>
                <Logo title="arcLogo" original={ArcLogoWhite} hover={ArcLogoGreen}/>
              </div>
            </Link>
            <Link to="https://www.facebook.com/unsw.illuminate/">
              <div>
                <FaFacebookF/>
              </div>
            </Link>
            <Link to="https://www.instagram.com/unswilluminate/">
              <div>
                <FaInstagram/>
              </div>
            </Link>
            <Link to="https://discord.gg/g6fcmh3Q8c">
              <div>
                <FaDiscord/>
              </div>
            </Link>
            <Link to="https://www.linkedin.com/company/project-illuminate/">
              <div>
                <FaLinkedinIn/>
              </div>
            </Link>
          </div>
        </div>
        <div className="footer-quick-links">
          <Link to="/" className="footer-quick-links-list">
            <li>Home</li>
          </Link>
          <Link to="/about" className="footer-quick-links-list">
            <li>About Us</li>
          </Link>
          <Link to="/events" className="footer-quick-links-list">
            <li>Events</li>
          </Link>
        </div>
        <div className="footer-quick-links">
          <Link to="/team" className="footer-quick-links-list">
            <li>Team</li>
          </Link>
          <Link to="/projects" className="footer-quick-links-list">
            <li>Projects</li>
          </Link>
          <Link to="/contact" className="footer-quick-links-list">
            <li>Contact Us</li>
          </Link>
        </div>
        <div className="footer-quick-links"></div>
      </div>
      <div className="footer-copyright">
        Copyright © UNSW Illuminate 2022
      </div>
    </div>
  );
};

export default Footer;

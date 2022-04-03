import { Link } from "gatsby";
import * as React from "react";
import "./styles/Footer.scss";
import Illuminate from "../../images/logo.png";
import Logo from "./Logo";
import ArcLogoWhite from "../../images/arcLogoWhiteOutline.png";
import ArcLogoGreen from "../../images/arcLogoGreenOutline.png";
import Facebook from "../../images/facebook.svg";
import Instagram from "../../images/instagram.svg";
import LinkedIn from "../../images/linkedin.svg";
import Discord from "../../images/discord.svg";

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
            <Logo title="arcLogo" original={ArcLogoWhite} hover={ArcLogoGreen}/>
            <Logo title="facebookLogo" original={Facebook} />
            <Logo title="instagramLogo" original={Instagram} />
            <Logo title="discordLogo" original={Discord}/>
            <Logo title="linkedInLogo" original={LinkedIn} />
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

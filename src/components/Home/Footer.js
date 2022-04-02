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
            {/* <img src={Illuminate} alt="illuminateLogo"/> */}
            <Logo title="IlluminateLogo" original={Illuminate} />
            <p id="IlluminateText">UNSW Illuminate</p>
          </div>
          <div className="footer-media">
            <Logo title="Arc Logo" original={ArcLogoWhite} hover={ArcLogoGreen}/>
            <Logo title="Facebook Logo" original={Facebook} />
            <Logo title="Instagram Logo" original={Instagram} />
            <Logo title="Discord Logo" original={Discord}/>
            <Logo title="LinkedIn Logo" original={LinkedIn} />
          </div>
        </div>
        <div className="footer-quick-links">
          <div className="footer-quick-links-list">
            Home
          </div>
          <div className="footer-quick-links-list">
            About Us
          </div>
          <div className="footer-quick-links-list">
            Events
          </div>
        </div>
        <div className="footer-quick-links">
          <div className="footer-quick-links-list">
            Team
          </div>
          <div className="footer-quick-links-list">
            Projects
          </div>
          <div className="footer-quick-links-list">
            Contact Us
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        Copyright © UNSW Illuminate 2022
      </div>
    </div>
  );
};

export default Footer;

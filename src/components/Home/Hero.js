import React from "react";
import "./styles/Hero.scss";
import SpotlightL from "../../images/spotlight-left.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="heroWrapper">
      <SlideIn delay={0.5}>
        <div style={{ position: "relative" }} className="textWrapper">
          <div className="heroSubtitle">UNSW</div>
          <h1 className="heroTitle">Illuminate</h1>
          {/* <div className="heroTitle titleBlur">Illuminate</div> */}
          <div className="glow"></div>
        </div>
      </SlideIn>

      <SlideIn className="catchline" delay={0.7}>
        Art meets technology
      </SlideIn>
      {/* <img src={SpotlightL} className="spotlight" /> */}
      <SlideIn delay={0.9}>
        <button className="projectsBtn">See our Projects!</button>
      </SlideIn>
    </div>
  );
};

export default Hero;

const SlideIn = ({ children, className, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "-40px" }}
      animate={{ opacity: 1, translateY: "0px" }}
      transition={{ delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

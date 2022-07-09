import React from "react";
// import "./styles/Hero.scss";
import * as styles from "./styles/Hero.module.scss";
import SpotlightL from "../../images/spotlight-left.svg";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <SlideIn delay={0.5}>
        <div style={{ position: "relative" }} className={styles.heroBody}>
          <div className={styles.subtitle}>UNSW</div>
          <h1 className={styles.title}>Illuminate</h1>
          {/* <div className="heroTitle titleBlur">Illuminate</div> */}
          <div className={styles.glow}></div>
        </div>
      </SlideIn>
      <SlideIn className={styles.catchline} delay={0.7}>
        Art meets technology
      </SlideIn>
      <SlideIn delay={0.9}>
        <Link to="collageWrapper" smooth={true}>
          <button className={styles.projectsBtn}>See our Projects!</button>
        </Link>
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

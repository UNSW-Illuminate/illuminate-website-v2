import React from "react";
import * as styles from "./styles/journey.module.scss";
import useMediaQuery from "../../hooks/useMediaQuery";
import timeline from "../../images/illuminateTimeline.svg";
import verticalTimeline from "../../images/verticalTimeline.svg";
import { motion } from "framer-motion";

const Journey = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <motion.div
      className={styles.container}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <div className={styles.title}>Our Journey</div>
      <div className={styles.timelineCont}>
        <div className={styles.timelineGrid}>
          <div className={styles.body} id={styles.journey1}>
            UNSW Illuminate began in 2015 as a project under UNSW's CREATE
            Student Society.
          </div>
          {isDesktop ? (
            <img src={timeline} className="timelineImg" id={styles.timeline} />
          ) : (
            <img src={verticalTimeline} id={styles.timeline} />
          )}
          <div className={styles.body} id={styles.journey2}>
            In 2020, we further expanded and officially became a society at
            UNSW.
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Journey;

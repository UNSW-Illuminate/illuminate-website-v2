import React from "react";
import "../generalStyles.scss";
import * as styles from "./styles/team.module.scss";
import { motion } from "framer-motion";
import teamBannerImage from "../../images/team/banner/team_banner.png";

const TeamBanner = () => {
  return (
    <div className={styles.bannerWrapper}>
      <motion.div
        style={{
          backgroundImage: `url(${teamBannerImage})`,
          backgroundPositionY: -400,
          backgroundPositionX: -200,
        }}
        className={styles.banner}
      >
        <div className={styles.title}>Our Team</div>
      </motion.div>
    </div>
  );
};

export default TeamBanner;

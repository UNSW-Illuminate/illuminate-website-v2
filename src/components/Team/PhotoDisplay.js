import React from "react";
import * as styles from "./styles/team.module.scss";
import { motion } from "framer-motion";
import * as Avatar from "@radix-ui/react-avatar";
import people from "./people_data";

const PhotoDisplay = () => {
  const teamLeads = people.team;
  const technicalLeads = people.technical;
  return (
    <div className={styles.teamWrapper}>
      <motion.div
        className={styles.container}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className={styles.teamContainer}>
          <div className={styles.heading}>Team Leads</div>
          {display(teamLeads)}
          <div className={styles.heading}>Technical Leads</div>
          {display(technicalLeads)}
        </div>
      </motion.div>
    </div>
  );
};

function display(teamArray) {
  return (
    <div className={styles.teamPhotoContainer}>
      {teamArray.map((person) => {
        return (
          <motion.div
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            key={person.name}
            className={styles.headshotWrapper}
          >
            <Avatar.Root>
              <Avatar.Image src={person.img} className={styles.headshot} />
              <Avatar.Fallback>
                <div className={styles.skeletonHeadshot} />
              </Avatar.Fallback>
            </Avatar.Root>
            <div className={styles.headshotDescriptor}>
              <h2 className={styles.memberName}>{person.name}</h2>
              <h3 className={styles.role}>{person.role}</h3>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default PhotoDisplay;

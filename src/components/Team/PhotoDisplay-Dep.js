import React from "react";
import * as styles from "./styles/team.module.scss";
import { motion } from "framer-motion";
import * as Avatar from "@radix-ui/react-avatar";

const PhotoDisplay = ({ selected, data }) => {
  let display = [];
  const findTeam = (subcom) => {
    for (let team in data) {
      if (subcom in data[team]) {
        return team;
      }
    }
  };

  const team = findTeam(selected);
  if (selected in data) {
    display = Object.values(data[team]).flat();
  } else {
    display = data[team][selected];
  }

  return (
    <div className={styles.teamPhotoContainer}>
      {display.map((person, i) => {
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
};

export default PhotoDisplay;

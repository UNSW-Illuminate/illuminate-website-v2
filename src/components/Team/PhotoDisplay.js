import React from "react";
import * as styles from "./styles/team.module.scss";
import { motion } from "framer-motion";

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
          <div
            layout
            key={person.memberName}
            className={styles.headshotWrapper}
          >
            <img src={person.img} className={styles.headshot} />
            <div className={styles.headshotDescriptor}>
              <h2 className={styles.memberName}>{person.name}</h2>
              <h3 className={styles.role}>{person.role}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PhotoDisplay;

import React from "react";
import * as styles from "./styles/values.module.scss";
import { motion } from "framer-motion";

const Values = () => {
  return (
    <motion.div
      className={styles.container}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className={styles.title}>Our culture, values and beliefs</div>
      <div className={styles.valuesCont}>
        {values.map((value) => (
          <div className={styles.valueBox}>
            <div className={styles.valueHeading}>{value.title}</div>
            <div className={styles.valueBody}>{value.content}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Values;

const values = [
  {
    title: "Multi-disciplinary",
    content: `UNSW Illuminate is a student society that combines the
  creativity of art and the innovation of engineering to
  demonstrate the magic of art meeting technology`,
  },
  {
    title: "Practical experience",
    content: `We aim to empower students to apply hands-on skills on large
    scale, professional, and multidisciplinary projects and to
    foster deep interactions designers and engineers.`,
  },
  {
    title: "Teamwork",
    content: `We aim to allow students to work together to realise and
    actualise their creative vision while gaining practical
    experience in the process.`,
  },
];

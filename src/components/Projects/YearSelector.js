import React from "react";
import { motion } from "framer-motion";
import * as styles from "./styles/yearSelector.module.scss";

const YearSelector = ({ selectedYear, setSelectedYear, isArticle }) => {
  const years = ["All", "2022", "2020", "2019", "2018", "2017", "2016"];

  return (
    <motion.div
      className={styles.wrapper}
      initial={!isArticle && { y: -10, opacity: 0 }}
      animate={!isArticle && { y: 0, opacity: 1 }}
    >
      {years.map((year) => (
        <div
          key={year}
          className={styles.year}
          onClick={() => setSelectedYear(year)}
        >
          {selectedYear === year && (
            <motion.div
              transition={{
                layout: {
                  duration: 0.4,
                  ease: "easeOut",
                },
              }}
              layoutId="highlight"
              className={styles.selectedYear}
            />
          )}
          {year}
        </div>
      ))}
    </motion.div>
  );
};

export default YearSelector;

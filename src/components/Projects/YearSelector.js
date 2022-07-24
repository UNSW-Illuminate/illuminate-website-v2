import React from "react";
import { motion } from "framer-motion";
import * as styles from "./styles/yearSelector.module.scss";

const YearSelector = () => {
  const years = ["All", 2022, 2021, 2020, 2019, 2018, 2017, 2016];
  const [selectedYear, setSelectedYear] = React.useState("All");

  return (
    <div className={styles.wrapper}>
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
            ></motion.div>
          )}
          {year}
        </div>
      ))}
    </div>
  );
};

export default YearSelector;

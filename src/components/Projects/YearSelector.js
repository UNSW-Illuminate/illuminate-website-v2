import React from "react";
import { motion } from "framer-motion";

const YearSelector = () => {
  const years = ["All", 2022, 2021, 2020, 2019, 2018, 2017, 2016];
  const [selectedYear, setSelectedYear] = React.useState("All");

  return (
    <div className="ysWrapper">
      {years.map((year) => (
        <div
          key={year}
          className={`ysYear`}
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
              className="ysSelectedYear"
            ></motion.div>
          )}
          {year}
        </div>
      ))}
    </div>
  );
};

export default YearSelector;

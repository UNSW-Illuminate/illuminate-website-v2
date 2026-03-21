import React from "react";
import { motion } from "framer-motion";
import * as styles from "./styles/yearSelector.module.scss";
import * as Select from "@radix-ui/react-select";
import { FiChevronDown, FiCheck } from "react-icons/fi";
import useMediaQuery from "../../hooks/useMediaQuery";

const YearSelector = ({ selectedYear, setSelectedYear, isArticle }) => {
  const years = ["All", "2025", "2023", "2022", "2020", "2019", "2018", "2017", "2016"];
  const isLaptop = useMediaQuery("(min-width: 960px)");

  return (
    <>
      {isLaptop ? (
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
      ) : (
        <MobileYearSelector
          years={years}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
      )}
    </>
  );
};

export default YearSelector;

const MobileYearSelector = ({ years, selectedYear, setSelectedYear }) => {
  return (
    <Select.Root
      defaultValue={selectedYear}
      onValueChange={(year) => {
        setSelectedYear(year);
      }}
    >
      <Select.Trigger className={styles.mobileTrigger}>
        <Select.Value value={selectedYear} />
        <Select.Icon>
          <FiChevronDown />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content>
          <motion.div initial={{ y: -10 }} animate={{ y: 0 }}>
            <Select.ScrollUpButton />
            <Select.Viewport className={styles.mobileContent}>
              {years.map((year) => (
                <Select.Item
                  value={year}
                  key={year}
                  className={styles.mobileItem}
                >
                  <Select.ItemText>{year}</Select.ItemText>
                  <Select.ItemIndicator>
                    <FiCheck />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Viewport>
            <Select.ScrollDownButton />
          </motion.div>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

import React from "react";
import DropdownTab from "./DropdownTab";
import PhotoDisplay from "./PhotoDisplay";
import data from "./data";
import "../generalStyles.scss";
import * as styles from "./styles/team.module.scss";
import { motion } from "framer-motion";

const TeamPhotos = () => {
  const [selected, setSelected] = React.useState("Executive");
  const [open, setOpen] = React.useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const isSelected = (portfolio) =>
    Object.keys(data[portfolio]).includes(selected);

  return (
    <div className={styles.wrapper}>
      <motion.h1
        className="pageHeading"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Our Team
      </motion.h1>
      <motion.div
        className={styles.container}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className={styles.dropdownTabContainer}>
          {Object.keys(data).map((e, key) => {
            return (
              <DropdownTab
                portfolio={e}
                subTeam={data[e]}
                isSelected={isSelected(e)}
                setSelected={setSelected}
                key={key}
                tabId={key}
                setOpen={setOpen}
                open={open}
              />
            );
          })}
        </div>
        <PhotoDisplay selected={selected} data={data} />
      </motion.div>
    </div>
  );
};

export default TeamPhotos;

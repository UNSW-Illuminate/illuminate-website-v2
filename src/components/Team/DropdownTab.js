import React from "react";
import DropdownMenu from "./DropdownMenu";
import * as styles from "./styles/team.module.scss";
import { motion } from "framer-motion";
import { MdExpandMore } from "react-icons/md";

const DropdownTab = ({
  portfolio,
  subTeam,
  isSelected,
  setSelected,
  tabId,
  setOpen,
  open,
}) => {
  const noSubTeam = Object.keys(subTeam).length === 1;
  const handleClick = () => {
    const original = {
      0: false,
      1: false,
      2: false,
      3: false,
    };
    const new_open = {
      ...original,
      [tabId]: true,
    };
    setOpen(new_open);
    if (noSubTeam) {
      setSelected(portfolio);
    }
  };
  return (
    <>
      <motion.div
        className={isSelected ? styles.tabSelected : styles.tab}
        onClick={handleClick}
        whileHover={{
          scale: 1.1,
        }}
      >
        <div className={styles.name}>{portfolio}</div>
        <span className={styles.expandIcon}>
          {!noSubTeam && <MdExpandMore size="0.6em" />}
        </span>
      </motion.div>
      {open[tabId] && !noSubTeam && (
        <DropdownMenu
          name={portfolio}
          subTeam={subTeam}
          tabId={tabId}
          setSelected={setSelected}
          setOpen={setOpen}
        />
      )}
    </>
  );
};

export default DropdownTab;

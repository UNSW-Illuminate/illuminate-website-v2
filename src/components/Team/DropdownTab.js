import React from "react";
import DropdownMenu from "./DropdownMenu";
// import "../styles/teamPhotos.scss";
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
        className={isSelected ? "tab-selected" : "tab"}
        onClick={handleClick}
        whileHover={{
          scale: 1.2,
        }}
      >
        <div className="name">{portfolio}</div>
        <span className="expandIcon">{!noSubTeam && <MdExpandMore />}</span>
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

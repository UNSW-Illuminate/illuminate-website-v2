import React from "react";
import DropdownTab from "./DropdownTab";
import PhotoDisplay from "./PhotoDisplay";
import data from "./data";
import "../generalStyles.scss";
import * as styles from "./styles/team.module.scss";
import { motion } from "framer-motion";
import * as Select from "@radix-ui/react-select";
import { FiChevronDown, FiCheck } from "react-icons/fi";
import useMediaQuery from "../../hooks/useMediaQuery";

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

  const isLaptop = useMediaQuery("(min-width: 1200px)");

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
        {isLaptop ? (
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
        ) : (
          <MobileYearSelector
            portfolios={data}
            selected={selected}
            setSelected={setSelected}
          />
        )}

        <PhotoDisplay selected={selected} data={data} />
      </motion.div>
    </div>
  );
};

export default TeamPhotos;

const MobileYearSelector = ({ portfolios, selected, setSelected }) => {
  return (
    <Select.Root
      defaultValue={selected}
      onValueChange={(portfolio) => {
        setSelected(portfolio);
      }}
    >
      <Select.Trigger className={styles.mobileTrigger}>
        <Select.Value value={selected} />
        <Select.Icon>
          <FiChevronDown />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content>
          <motion.div initial={{ y: -10 }} animate={{ y: 0 }}>
            <Select.ScrollUpButton />
            <Select.Viewport className={styles.mobileContent}>
              {Object.keys(portfolios).map((portfolio) => (
                <Select.Item
                  value={portfolio}
                  key={portfolio}
                  className={styles.mobileItem}
                >
                  <Select.ItemText>{portfolio}</Select.ItemText>
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

import React from "react";
import DropdownTab from "./DropdownTab";
import PhotoDisplay from "./PhotoDisplay";
import data from "./data";
import * as styles from "../styles/team.module.scss";

const TeamPhotos = () => {
  const [selected, setSelected] = React.useState("Software");
  const [open, setOpen] = React.useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const isSelected = (portfolio) =>
    Object.keys(data[portfolio]).includes(selected);

  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default TeamPhotos;

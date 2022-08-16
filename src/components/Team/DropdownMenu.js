import React from "react";
import * as styles from "./styles/team.module.scss";

const DropdownMenu = ({ name, subTeam, tabId, setOpen, setSelected }) => {
  const lastItem = (key) => Object.keys(subTeam).length === key;
  return (
    <div
      className={styles.menu}
      style={{ left: `calc(10vw + ((80vw - 300px) / 4 + 100px) * ${tabId})` }}
    >
      {[name, ...Object.keys(subTeam)].map((team, key) => {
        return (
          <div
            key={key}
            className={
              key === 0
                ? styles.item
                : lastItem(key)
                ? styles.itemLast
                : styles.itemSelectable
            }
            onClick={() => {
              setOpen(false);
              setSelected(team);
            }}
          >
            <div className={styles.subTeamName}>{team}</div>
          </div>
        );
      })}
    </div>
  );
};

export default DropdownMenu;

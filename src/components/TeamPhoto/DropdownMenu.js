import React from "react";
import "./teamPhoto.scss";

const DropdownMenu = ({ name, subTeam, tabId, setOpen, setSelected }) => {
  const lastItem = (key) => Object.keys(subTeam).length === key;
  return (
    <div
      className="menu"
      style={{ left: `calc(10vw + ((80vw - 300px) / 4 + 100px) * ${tabId})` }}
    >
      {[name, ...Object.keys(subTeam)].map((team, key) => {
        return (
          <div
            key={key}
            className={
              key === 0 ? "item" : lastItem(key) ? "itemLast" : "itemSelectable"
            }
            onClick={() => {
              setOpen(false);
              setSelected(team);
            }}
          >
            <div className="subTeamName">{team}</div>
          </div>
        );
      })}
    </div>
  );
};

export default DropdownMenu;

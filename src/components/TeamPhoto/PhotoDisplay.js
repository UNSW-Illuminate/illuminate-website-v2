import React from "react";

const PhotoDisplay = ({ selected, data }) => {
  let display = [];
  const findTeam = (subcom) => {
    for (let team in data) {
      if (subcom in data[team]) {
        return team;
      }
    }
  };

  const team = findTeam(selected);
  if (selected in data) {
    display = Object.values(data[team]).flat();
  } else {
    display = data[team][selected];
  }

  return (
    <div className="teamPhotoContainer">
      {display.map((e, i) => {
        return <img src={e} key={i}></img>;
      })}
    </div>
  );
};

export default PhotoDisplay;

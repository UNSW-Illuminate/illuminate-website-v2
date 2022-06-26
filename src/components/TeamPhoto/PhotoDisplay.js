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

  if (!data[selected]) {
    const team = findTeam(selected);
    display = Object.values(data[team]).flat();
  } else {
    display = data[selected][selected];
  }

  return (
    <div className="teamPhotoContainer">
      Team Photo
      {display.map((e, i) => {
        return <img src={e} key={i}></img>;
      })}
    </div>
  );
};

export default PhotoDisplay;

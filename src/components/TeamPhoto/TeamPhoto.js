import React from "react";
import DropdownMenu from "./DropdownMenu";
import PhotoDisplay from "./PhotoDisplay";
import data from "./data";
import "./teamPhoto.scss";

const TeamPhoto = () => {
  const [selected, setSelected] = React.useState("Executive");
  return (
    <div className="container">
      {data.map((e, key) => (
        <DropdownMenu portfolio={e} key={key} setSelected={setSelected} />
      ))}
      <PhotoDisplay selected={selected} data={data} />
    </div>
  );
};

export default TeamPhoto;

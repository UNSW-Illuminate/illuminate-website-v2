import React from "react";
import { motion } from "framer-motion";
import "./styles/Collage.scss";
import synergy from "../../images/projects/synergy.jpg";
import cube from "../../images/projects/cube.jpg";
import crystallise from "../../images/projects/crystallise.jpg";
import laneway from "../../images/projects/laneway.jpg";
import pancake from "../../images/projects/pancake.jpg";

const Collage = () => {
  return (
    <div className="collageWrapper">
      <div className="collage">
        <img src={synergy} alt="" className="gridItem1" />
        <img src={laneway} alt="" className="gridItem2" />
        <img src={pancake} alt="" className="gridItem3" />
        <img src={crystallise} alt="" className="gridItem4" />
      </div>
    </div>
  );
};

export default Collage;

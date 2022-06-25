import React from "react";
import { motion } from "framer-motion";
import "./styles/Collage.scss";
import synergy from "../../images/projects/synergy.jpg";
import cube from "../../images/projects/cube.jpg";
import crystallise from "../../images/projects/crystallise.jpg";
import laneway from "../../images/projects/laneway.jpg";
import pancake from "../../images/projects/pancake.jpg";
const Collage = () => {
  const [transformStyle, setTransformStyle] = React.useState({});
  const collage = React.useRef(null);
  const [x, setX] = React.useState(0);

  return (
    <div id="collageWrapper" ref={collage}>
      {/* <div className="collageHeading">
        We’re a student society that applies hands-on skills on large scale
        multidisciplinary light projects!
      </div> */}
      <div
        className="collage"
        onMouseMove={(e) => {
          setTransformStyle({
            transform: `translate(${
              collage.current.clientWidth / 2 - e.clientX
            }px , ${collage.current.clientHeight / 2 - e.clientY}px)`,
            transition: "all 5000ms ease-out",
          });
        }}
        onMouseLeave={(e) =>
          setTimeout(() => {
            setTransformStyle({
              transform: `translate(0, 0)`,
              transition: "all 1000ms ease-out",
            });
          }, 500)
        }
        style={transformStyle}
      >
        <div className="gridItem1">
          <img src={laneway} alt="" className="collageItemGlow collageItem" />
          <img src={laneway} alt="" className="gridItem3 collageItem" />
        </div>
        <div className="gridItem2">
          <img src={pancake} alt="" className="collageItemGlow collageItem" />
          <img src={pancake} alt="" className="gridItem2 collageItem" />
        </div>

        <div className="gridItem3">
          <img src={synergy} alt="" className="collageItemGlow collageItem" />
          <img src={synergy} alt="" className="gridItem1 collageItem" />
        </div>
        <div className="gridItem4">
          <img
            src={crystallise}
            alt=""
            className="collageItemGlow collageItem"
          />
          <img src={crystallise} alt="" className="gridItem4 collageItem" />
        </div>
        <div className="gridItem5">
          <img src={cube} alt="" className="collageItemGlow collageItem" />
          <img src={cube} alt="" className="gridItem5 collageItem" />
        </div>
      </div>
    </div>
  );
};

export default Collage;

import React from "react";
import { motion } from "framer-motion";
import * as styles from "./styles/Collage.module.scss";
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
    <div id="collageWrapper" className={styles.collageWrapper} ref={collage}>
      {/* <div className="collageHeading">
        We’re a student society that applies hands-on skills on large scale
        multidisciplinary light projects!
      </div> */}
      <div
        className={styles.collage}
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
        <div className={styles.gridItem1}>
          <img
            src={laneway}
            alt=""
            className={`${styles.collageItemGlow} ${styles.collageItem}`}
          />
          <img
            src={laneway}
            alt=""
            className={`${styles.gridItem3} ${styles.collageItem}`}
          />
        </div>
        <div className={styles.gridItem2}>
          <img
            src={pancake}
            alt=""
            className={`${styles.collageItemGlow} ${styles.collageItem}`}
          />
          <img
            src={pancake}
            alt=""
            className={`${styles.gridItem2} ${styles.collageItem}`}
          />
        </div>

        <div className={styles.gridItem3}>
          <img
            src={synergy}
            alt=""
            className={`${styles.collageItemGlow} ${styles.collageItem}`}
          />
          <img
            src={synergy}
            alt=""
            className={`${styles.gridItem1} ${styles.collageItem}`}
          />
        </div>
        <div className={styles.gridItem4}>
          <img
            src={crystallise}
            alt=""
            className={`${styles.collageItemGlow} ${styles.collageItem}`}
          />
          <img
            src={crystallise}
            alt=""
            className={`${styles.gridItem4} ${styles.collageItem}`}
          />
        </div>
        <div className={styles.gridItem5}>
          <img
            src={cube}
            alt=""
            className={`${styles.collageItemGlow} ${styles.collageItem}`}
          />
          <img
            src={cube}
            alt=""
            className={`${styles.gridItem5} ${styles.collageItem}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Collage;

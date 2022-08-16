import React from "react";
import { motion } from "framer-motion";
import * as styles from "./styles/Collage.module.scss";
import synergy from "../../images/projects/synergy.jpg";
import cube from "../../images/projects/cube.jpg";
import crystallise from "../../images/projects/crystallise.jpg";
import laneway from "../../images/projects/laneway.jpg";
import pancake from "../../images/projects/pancake.jpg";
import heartstrings from "../../images/projects/heartstrings.jpeg";
import { navigate } from "gatsby";

const Collage = () => {
  const [transformStyle, setTransformStyle] = React.useState({});
  const collage = React.useRef(null);

  const handleBrowse = (e) => {
    setTransformStyle({
      transform: `translate(${
        collage.current.clientWidth / 2 - e.clientX
      }px , ${collage.current.clientHeight / 2 - e.clientY}px)`,
      transition: "all 5000ms ease-out",
    });
  };

  return (
    <div id="collageWrapper" className={styles.collageWrapper} ref={collage}>
      {/* <div className="collageHeading">
        We’re a student society that applies hands-on skills on large scale
        multidisciplinary light projects!
      </div> */}
      <div
        className={styles.collage}
        onMouseMove={(e) => handleBrowse(e)}
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
        <div
          className={`${styles.collageItem} ${styles.gridItem1}`}
          onClick={() => navigate("/projects/heartstrings")}
        >
          <img
            src={heartstrings}
            alt=""
            className={`${styles.collageItemGlow} ${styles.collageItem}`}
          />
          <img
            src={heartstrings}
            alt=""
            className={`${styles.gridItem1} ${styles.collageItem}`}
          />
          <div className={styles.projectTitle}>Heartstrings</div>
        </div>
        <div
          className={`${styles.collageItem} ${styles.gridItem2}`}
          onClick={() => navigate("/projects/laneway")}
        >
          <img
            src={laneway}
            alt=""
            className={`${styles.collageItemGlow} ${styles.collageItem}`}
          />
          <img
            src={laneway}
            alt=""
            className={`${styles.gridItem2} ${styles.collageItem}`}
          />
          <div className={styles.projectTitle}>Laneway</div>
        </div>
        <div
          className={`${styles.collageItem} ${styles.gridItem3}`}
          onClick={() => navigate("/projects/celestial-pancake")}
        >
          <img
            src={pancake}
            alt=""
            className={`${styles.collageItemGlow} ${styles.collageItem}`}
          />
          <img
            src={pancake}
            alt=""
            className={`${styles.gridItem3} ${styles.collageItem}`}
          />
          <div className={styles.projectTitle}>Celestial Pancake</div>
        </div>
        <div
          className={`${styles.collageItem} ${styles.gridItem4}`}
          onClick={() => navigate("/projects/synergy")}
        >
          <img
            src={synergy}
            alt=""
            className={`${styles.collageItemGlow} ${styles.collageItem}`}
          />
          <img
            src={synergy}
            alt=""
            className={`${styles.gridItem4} ${styles.collageItem}`}
          />
          <div className={styles.projectTitle}>Synergy</div>
        </div>
        <div
          className={`${styles.collageItem} ${styles.gridItem5}`}
          onClick={() => navigate("/projects/crystallise")}
        >
          <img
            src={crystallise}
            alt=""
            className={`${styles.collageItemGlow} ${styles.collageItem}`}
          />
          <img
            src={crystallise}
            alt=""
            className={`${styles.gridItem5} ${styles.collageItem}`}
          />
          <div className={styles.projectTitle}>Crystallise</div>
        </div>
        <div
          className={`${styles.collageItem} ${styles.gridItem6}`}
          onClick={() => navigate("/projects/mondrian-cube")}
        >
          <img
            src={cube}
            alt=""
            className={`${styles.collageItemGlow} ${styles.collageItem}`}
          />
          <img
            src={cube}
            alt=""
            className={`${styles.gridItem6} ${styles.collageItem}`}
          />
          <div className={styles.projectTitle}>Mondrian Cube</div>
        </div>
      </div>
    </div>
  );
};

export default Collage;

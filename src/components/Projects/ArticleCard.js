import React from "react";
import pancake from "../../images/projects/pancake.jpg";
import * as styles from "./styles/articleCard.module.scss";
import { BsStack } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiCalendar } from "react-icons/hi";

const ArticleCard = () => {
  return (
    <div className={styles.container}>
      <img className={styles.thumbnail} src={pancake}></img>
      <div className={styles.information}>
        <div className={styles.title}>Celestial Pancake</div>
        <div className={styles.descriptorWrapper}>
          <div className={styles.descriptor}>
            <FaMapMarkerAlt />
            Vivid
          </div>
          <div className={styles.descriptor}>
            <HiCalendar size={"1.1em"} />
            2019
          </div>
          <div className={styles.descriptor}>
            <BsStack size={"1em"} />
            Wood, LED, Optic Fibres
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

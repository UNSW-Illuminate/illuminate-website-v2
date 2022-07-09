import React from "react";
import pancake from "../../images/projects/pancake.jpg";
import * as styles from "./styles/articleCard.module.scss";
import { BsStack } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiCalendar } from "react-icons/hi";

const ArticleCard = ({ article }) => {
  return (
    <div className={styles.container}>
      <img className={styles.thumbnail} src={article.mainImage.asset.url}></img>
      <div className={styles.information}>
        <div className={styles.title}>{article.title}</div>
        <div className={styles.descriptorWrapper}>
          <div className={styles.descriptor}>
            <FaMapMarkerAlt />
            {article.location}
          </div>
          <div className={styles.descriptor}>
            <HiCalendar size={"1.1em"} />
            {article.creationDate.substring(0, 4)}
          </div>
          <div className={styles.descriptor}>
            <BsStack size={"1em"} />
            <div style={{ maxWidth: "230px" }}>
              {article.materials.join(" · ")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

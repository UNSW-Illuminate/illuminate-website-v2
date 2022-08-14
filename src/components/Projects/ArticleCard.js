import React from "react";
import pancake from "../../images/projects/pancake.jpg";
import * as styles from "./styles/articleCard.module.scss";
import { BsStack } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiCalendar } from "react-icons/hi";
import { motion } from "framer-motion";

const ArticleCard = ({ article }) => {
  console.log(article);
  return (
    <motion.div
      className={styles.container}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <img
        className={styles.thumbnail}
        src={article.node.mainImage.asset.url}
      ></img>
      <div className={styles.information}>
        <div className={styles.title}>{article.title}</div>
        <div className={styles.descriptorWrapper}>
          <div className={styles.descriptor}>
            <FaMapMarkerAlt />
            {article.location}
          </div>
          <div className={styles.descriptor}>
            <HiCalendar size={"1.1em"} />
            {article.node.creationDate.substring(0, 4)}
          </div>
          <div className={styles.descriptor}>
            <BsStack size={"1em"} />
            <div style={{ maxWidth: "230px" }}>
              {article.node.materials.join(" · ")}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleCard;

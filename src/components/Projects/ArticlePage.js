import React, { useState, useEffect } from "react";
import sanityClient from "../../sanityClient.js";
import * as styles from "./styles/articlePage.module.scss";
import { motion } from "framer-motion";

const ArticlePage = () => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(articleQuery)
      .then((data) => {
        setArticle(data[0]);
      })
      .catch(console.error);
  }, []);
  return (
    <div>
      {article && (
        <div>
          <motion.h2
            className={styles.heading}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Description
          </motion.h2>
          <motion.div
            className={styles.body}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
          >
            {article.body.map((paragraph) => (
              <div className={styles.paragraph}>
                {paragraph.children[0].text}
              </div>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ArticlePage;

const articleQuery = `*[_type == "project" && slug.current == "celestial-pancake"]`;

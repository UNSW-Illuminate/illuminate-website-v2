import React, { useState, useEffect } from "react";
import Template from "../components/Template/template";
import * as styles from "../components/Projects/styles/projects.module.scss";
import YearSelector from "../components/Projects/YearSelector";
import ArticleCard from "../components/Projects/ArticleCard";
import { graphql } from "gatsby";
import { motion } from "framer-motion";

const Projects = ({ data, location }) => {
  const [displayedArticles, setDisplayedArticles] = useState(
    data.allSanityProject.edges
  );
  const [selectedYear, setSelectedYear] = useState(
    location.state?.year ? location.state.year : "All"
  );
  useEffect(() => {
    if (selectedYear === "All") {
      setDisplayedArticles(data.allSanityProject.edges);
      return;
    }
    setDisplayedArticles(
      data.allSanityProject.edges.filter(
        (article) => article.node.creationDate.substring(0, 4) === selectedYear
      )
    );
  }, [selectedYear]);

  return (
    <Template currentPage="projects">
      <title>Projects | UNSW Illuminate</title>
      <div className={styles.wrapper}>
        <motion.h1
          className="pageHeading"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Our Projects
        </motion.h1>
        <YearSelector
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
        <div className={styles.cardsContainer}>
          {displayedArticles.map((article) => (
            <ArticleCard key={article.node.slug.current} article={article} />
          ))}
        </div>
        {/* <ArticlePage /> */}
      </div>
    </Template>
  );
};

export default Projects;

export const query = graphql`
  query Projects {
    allSanityProject(sort: { fields: creationDate, order: DESC }) {
      edges {
        node {
          title
          slug {
            current
          }
          location
          creationDate
          materials
          mainImage {
            asset {
              id
              url
            }
          }
        }
      }
    }
  }
`;

/* <div>
        One of the main projects we have undertaken over the past 4 years is to
        design and actualise a large-scale installation for VIVID Sydney, the
        world’s largest festival of Light, Music and Ideas. In 2020 we have
        decided to branch out and collaborate with local communities and
        companies, as well as UNSW, in projects that can brighten people’s every
        day lives.
      </div> */

import React, { useState, useEffect } from "react";
import Template from "../components/Template/template";
import * as styles from "../components/Projects/styles/projects.module.scss";
import YearSelector from "../components/Projects/YearSelector";
import ArticleCard from "../components/Projects/ArticleCard";
import sanityClient from "../sanityClient.js";
import ArticlePage from "../components/Projects/ArticlePage";

const Projects = () => {
  const [articles, setArticles] = useState(null);
  const [displayedArticles, setDisplayedArticles] = useState(null);
  const [selectedYear, setSelectedYear] = useState("All");

  useEffect(() => {
    sanityClient
      .fetch(articleQuery)
      .then((data) => {
        setArticles(data);
        setDisplayedArticles(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (articles) {
      if (selectedYear === "All") {
        setDisplayedArticles(articles);
        return;
      }
      setDisplayedArticles(
        articles.filter(
          (article) =>
            article.creationDate.substring(0, 4) === selectedYear.toString()
        )
      );
    }
  }, [selectedYear]);

  return (
    <Template currentPage="projects">
      <div className={styles.wrapper}>
        <YearSelector
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
        {/* <div className={styles.cardsContainer}>
          {displayedArticles &&
            displayedArticles.map((article) => (
              <ArticleCard key={article.slug.current} article={article} />
            ))}
        </div> */}
        <ArticlePage />
      </div>
    </Template>
  );
};

export default Projects;

const articleQuery = `*[_type == "project"] | order(creationDate desc) {
  title,
  slug,
  location,
  creationDate,
  materials,
  mainImage{
    asset->{
    _id,
    url
  }
}
}`;

/* <div>
        One of the main projects we have undertaken over the past 4 years is to
        design and actualise a large-scale installation for VIVID Sydney, the
        world’s largest festival of Light, Music and Ideas. In 2020 we have
        decided to branch out and collaborate with local communities and
        companies, as well as UNSW, in projects that can brighten people’s every
        day lives.
      </div> */

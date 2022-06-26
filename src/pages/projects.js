import React from "react";
import Template from "../components/Template/template";
import "../components/Projects/styles/yearSelector.scss";
import YearSelector from "../components/Projects/YearSelector";
import ArticleCard from "../components/Projects/ArticleCard";

const Projects = () => {
  return (
    <Template>
      <div className="projectsPageWrapper">
        {/* <div>
        One of the main projects we have undertaken over the past 4 years is to
        design and actualise a large-scale installation for VIVID Sydney, the
        world’s largest festival of Light, Music and Ideas. In 2020 we have
        decided to branch out and collaborate with local communities and
        companies, as well as UNSW, in projects that can brighten people’s every
        day lives.
      </div> */}
        <YearSelector />
        <div className="articleCardWrapper">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </Template>
  );
};

export default Projects;

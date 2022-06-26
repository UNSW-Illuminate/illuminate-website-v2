import React from "react";
import Template from "../components/Template/template";
import "../components/projects/styles/yearSelector.scss";
import { motion } from "framer-motion";

const years = ["All", 2022, 2021, 2020, 2019, 2018, 2017, 2016];

const Projects = () => {
  const [selectedYear, setSelectedYear] = React.useState("All");

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
        <div className="ysWrapper">
          {years.map((year) => (
            <div
              key={year}
              className={`ysYear`}
              onClick={() => setSelectedYear(year)}
            >
              {selectedYear === year && (
                <motion.div
                  transition={{
                    layout: {
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  }}
                  layoutId="highlight"
                  className="ysSelectedYear"
                ></motion.div>
              )}
              {year}
            </div>
          ))}
        </div>
      </div>
    </Template>
  );
};

export default Projects;

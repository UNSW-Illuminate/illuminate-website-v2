import * as React from "react";
import * as styles from "../components/About/styles/about.module.scss";
import Template from "../components/Template/template";
import Values from "../components/About/Values";
import Journey from "../components/About/Journey";

const AboutPage = () => {
  return (
    <Template currentPage="about">
      <div className={styles.wrapper}>
        <Values />
        <Journey />
      </div>
    </Template>
  );
};

export default AboutPage;

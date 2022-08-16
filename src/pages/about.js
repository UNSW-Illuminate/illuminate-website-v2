import * as React from "react";
import * as styles from "../components/About/styles/about.module.scss";
import Template from "../components/Template/template";
import Values from "../components/About/Values";
import Journey from "../components/About/Journey";

const AboutPage = () => {
  return (
    <Template currentPage="about">
      <title>About | UNSW Illuminate</title>
      <div className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <Values />
        </div>
        <div className={styles.contentWrapper}>
          <Journey />
        </div>
      </div>
    </Template>
  );
};

export default AboutPage;

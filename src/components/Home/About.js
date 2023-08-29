import React from "react";
import * as styles from "./styles/About.module.scss";
import { Player } from "@lottiefiles/react-lottie-player";

const About = () => {
  <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.aboutContainer}>
        <div className={styles.titleContainer}>
          Our culture, values and beliefs
        </div>
      </div>
      <div className={styles.valuesContainer}>
        {values.map((value) => (
          <div className={styles.valueBox}>
            <div className={styles.animationBox}>
              <Player
                src={value.animationSource}
                background="transparent"
                speed="0.75"
                style={{ width: "300px", height: "300px" }}
                loop
                controls
                autoplay
                direction="1"
                mode="normal"
              ></Player>
            </div>
            <div className={styles.textBox}>
              <div className={styles.valueHeading}>{value.title}</div>
              <div className={styles.valueBody}>{value.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

const values = [
  {
    title: "Multi-disciplinary",
    content: `UNSW Illuminate is a student society that combines the
    creativity of art and the innovation of engineering to
    demonstrate the magic of art meeting technology.`,
    animationSource:
      "https://lottie.host/accf30ab-2ba6-46ce-afef-0283aa3398b3/HEmQufCLXM.json",
  },
  {
    title: "Practical experience",
    content: `We aim to empower students to apply hands-on skills on large
      scale, professional, and multi-disciplinary projects and to
      foster deep interactions between designers and engineers.`,
    animationSource:
      "https://lottie.host/0a7b69e5-62c5-4f3b-8e4e-d310f4ef041c/AvUXlNLnlZ.json",
  },
  {
    title: "Teamwork",
    content: `We aim to allow students to work together to realise and
      actualise their creative vision while gaining practical
      experience in the process.`,
    animationSource:
      "https://lottie.host/a935baea-c8d0-4e82-b2e5-52fd9c2c6b95/CzN7BkpqUA.json",
  },
];

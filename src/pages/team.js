import React from "react";
import TeamPhotos from "../components/Team/TeamBanner";
import Template from "../components/Template/template";
import * as styles from "../components/Team/styles/team.module.scss";
import TeamBanner from "../components/Team/TeamBanner";
import Departments from "../components/Team/Departments";
import PhotoDisplay from "../components/Team/PhotoDisplay";

const Team = () => (
  <Template currentPage="team">
    <title>Team | UNSW Illuminate</title>
    <div className={styles.teamWrapper}>
      <TeamBanner />
      <PhotoDisplay />
      <Departments />
    </div>
  </Template>
);

export default Team;

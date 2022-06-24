import React from "react";
import TeamPhoto from "../components/TeamPhoto/TeamPhoto";
import Template from "../components/Template/template";
import "./styles/team.scss";

const Team = () => (
  <Template>
    <div className="banner">Meet the Team</div>
    <TeamPhoto />
  </Template>
);

export default Team;

import React from "react";
import TeamPhoto from "../components/Team/TeamPhoto/TeamPhoto";
import Template from "../components/Template/template";

const Team = () => (
  <Template currentPage="team">
    <div className="banner">Meet the Team</div>
    <TeamPhoto />
  </Template>
);

export default Team;

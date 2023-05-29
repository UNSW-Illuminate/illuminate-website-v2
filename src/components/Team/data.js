import artDesignLead from "../../images/team/natalie.jpg";
import teamManager from "../../images/team/allan.png";
import mechanicalLead from "../../images/team/daniel.jpg";
import electricalLead from "../../images/team/aayush.jpeg";
import softwareLead from "../../images/team/mitchell.png";

import generic from "../../images/team/generic.png";

const data = {
  Technical: {
    Technical: [
      {
        name: "Aayush Rajouria",
        role: "Electrical Lead",
        img: electricalLead,
      },
      {
        name: "Daniel Cicek",
        role: "Mechanical Lead",
        img: mechanicalLead,
      },
      {
        name: "Mitchell Wallace",
        role: "Software Lead",
        img: softwareLead,
      },
      {
        name: "Ray Gu",
        role: "Technical Manager",
        img: generic,
      },
      {
        name: "Tejit Pradhan",
        role: "Web Lead",
        img: generic,
      },
    ],
  },

  "Art and Design": {
    "Art and Design": [
      {
        name: "Natalie Chen",
        role: "Art and Design Lead",
        img: artDesignLead,
      },
    ],
  },

  Executive: {
    Executive: [
      {
        name: "Allan Goodman",
        role: "Team Manager",
        img: teamManager,
      },
    ],
  },
};

export default data;

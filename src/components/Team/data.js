import artDesignLead from "../../images/team/natalie.jpg";
import teamManager from "../../images/team/allan.png";
import mechanicalLead from "../../images/team/daniel.jpg";
import electricalLead from "../../images/team/aayush.jpeg";

import generic from "../../images/team/generic.png";

const data = {
  Executive: {
    Executive: [
      {
        name: "Allan Goodman",
        role: "Team Manager",
        img: teamManager,
      },
    ],
  },

  Technical: {
    Technical: [
      {
        name: "Ray Gu",
        role: "Technical Manager",
        img: generic,
      },
      {
        name: "Mitchell Wallace",
        role: "Software Lead",
        img: generic,
      },
      {
        name: "Tejit Pradhan",
        role: "Web Lead",
        img: generic,
      },
      {
        name: "Daniel Cicek",
        role: "Mechanical Lead",
        img: mechanicalLead,
      },
      {
        name: "Aayush Rajouria",
        role: "Electrical Lead",
        img: electricalLead,
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
};

export default data;

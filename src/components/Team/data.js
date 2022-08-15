import photo from "../../images/team/timothy.jpg";
import president from "../../images/team/nathan.jpg";
import vicePresident from "../../images/team/daphne.jpg";
import softwareColead1 from "../../images/team/allan.png";
import softwareColead2 from "../../images/team/sano.jpg";

const data = {
  Executive: {
    Executive: [
      {
        name: "Nathan Quan",
        role: "President",
        img: president,
      },
      {
        name: "Daphne Li",
        role: "Vice President",
        img: vicePresident,
      },
    ],
  },

  Technical: {
    Technical: [
      {
        name: "Allan Goodman",
        role: "Software Colead",
        img: softwareColead1,
      },
      {
        name: "Sanojan Thiyagaraja",
        role: "Software Colead",
        img: softwareColead2,
      },
    ],
    // Mechanical: [],
    // Electrical: [],
    // Software: [],
  },

  Admin: {
    "Finance & Sponsorship": [
      {
        name: "Timothy Jing",
        role: "Art and Design Director",
        img: photo,
      },
    ],
    Marketing: [
      {
        name: "Timothy Jing",
        role: "Art and Design Director",
        img: photo,
      },
    ],
  },

  "Art and Design": {
    "Art and Design": [
      {
        name: "Timothy Jing",
        role: "Art and Design Director",
        img: photo,
      },
    ],
  },
};

export default data;

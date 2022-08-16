import photo from "../../images/team/timothy.jpg";
import president from "../../images/team/nathan.jpg";
import vicePresident from "../../images/team/daphne.jpg";
import softwareColead1 from "../../images/team/allan.png";
import softwareColead2 from "../../images/team/sano.jpg";
import adminManager from "../../images/team/dominique.jpeg";
import eventsLead from "../../images/team/zami.png";
import fSLead from "../../images/team/mohique.jpeg";
import marketingColead1 from "../../images/team/charlotte.jpeg";
import generic from "../../images/team/generic.png";

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
      {
        name: "Ray Gu",
        role: "Mechanical Lead",
        img: generic,
      },
      {
        name: "Aayush Surnamc",
        role: "Electrical Lead",
        img: generic,
      },
    ],
    // Mechanical: [],
    // Electrical: [],
    // Software: [],
  },

  Admin: {
    Admin: [
      {
        name: "Dominique Djaidiguna",
        role: "Administration Manager",
        img: adminManager,
      },
      {
        name: "Zami Lee",
        role: "Events Lead",
        img: eventsLead,
      },
      {
        name: "Mohique Gajdhar",
        role: "Finance and Sponsorship Lead",
        img: fSLead,
      },
      {
        name: "Charlotte Chu",
        role: "Marketing Colead",
        img: marketingColead1,
      },
      {
        name: "Cicy Zhou",
        role: "Marketing Colead",
        img: generic,
      },
      {
        name: "Jamie Mo",
        role: "Media Lead",
        img: generic,
      },
    ],
    // "Finance & Sponsorship": [],
    // Marketing: [],
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

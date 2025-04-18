// import artDesignLead from "../../images/team/natalie.jpg";
// import teamManager from "../../images/team/allan.png";
// import mechanicalLead from "../../images/team/daniel.jpg";
// import electricalLead from "../../images/team/aayush.jpeg";
// import softwareLead from "../../images/team/mitchell.png";

import generic from "../../images/team/generic.png";

import designBackground from "../../images/team/DesignBackground.jpg";
import electricalBackground from "../../images/team/ElectricalBackground.jpg";
import mechanicalBackground from "../../images/team/MechanicalBackground.jpg";
import softwareBackground from "../../images/team/SoftwareBackground.jpg";

export const teamData = {

    Technical: [
      {
        name: "Elsa Doan",
        role: "Electrical Lead",
        img: generic,
      },
      {
        name: "Yangyue Jiang",
        role: "Mechanical Lead",
        img: generic,
      },
      {
        name: "Sheen Sandhu",
        role: "Software Lead",
        img: generic,
      },
      {
        name: "Liam Smith",
        role: "Web Lead",
        img: generic,
      },
    ],

    Design: [
      {
        name: "Stella Fan",
        role: "Art and Design Lead",
        img: generic,
      },
    ],

    Executive: [
      {
        name: "Nathan Nguyen",
        role: "Project Lead",
        img: generic,
      },
    ],

};

export const depData ={
  departments: [
    {
      depName: "Software",
      depDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: softwareBackground
    },
    {
      depName: "Mechanical",
      depDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: mechanicalBackground
    },
    {
      depName: "Electrical",
      depDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: electricalBackground
    },
    {
      depName: "Design & Biomedical",
      depDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: designBackground
    },
  ]
};

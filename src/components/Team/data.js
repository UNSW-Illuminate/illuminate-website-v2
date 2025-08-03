// import artDesignLead from "../../images/team/natalie.jpg";
// import teamManager from "../../images/team/allan.png";
// import mechanicalLead from "../../images/team/daniel.jpg";
// import softwareLead from "../../images/team/mitchell.png";
import teamlead from "../../images/team/nathan.jpg";
import electricalLead from "../../images/team/elsa.jpg";

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
        img: electricalLead,
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
        img: teamlead,
      },
    ],

};

export const depData ={
  departments: [
    {
      depName: "Software",
      depDescription: "We develop the logic that powers our systems — from control loops to user interfaces. Our team works across embedded systems, simulation, and real-time processing to make everything run smoothly.",
      img: softwareBackground
    },
    {
      depName: "Mechanical",
      depDescription: "We design and build the physical systems behind our projects — everything from frames and linkages to actuators and custom parts. Whether it’s 3D printing or full assemblies, we turn ideas into something real.",
      img: mechanicalBackground
    },
    {
      depName: "Electrical",
      depDescription: "This team handles the electronics that bring our systems to life. From circuit design to wiring and testing, we make sure everything has power, signal, and reliability.",
      img: electricalBackground
    },
    {
      depName: "Design & Biomedical",
      depDescription: "This team bridges the gap between engineering and experience. Whether it's designing intuitive interfaces or exploring biomedical challenges, we focus on solutions that are both functional and thoughtful.",
      img: designBackground
    },
  ]
};

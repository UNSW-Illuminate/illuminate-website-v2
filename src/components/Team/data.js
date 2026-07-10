// TODO: Andrew add executive team photos
import projectLead1 from "../../images/team/lisaN.jpg";
import projectLead2 from "../../images/team/lisaH.jpg";
import electricalLead1 from "../../images/team/andrew.jpg";
//import electricalLead2 from "../../images/team/fange.jpg";
//import mechanicalLead from "../../images/team/jacky.jpg";
//import artDesignLead from "../../images/team/alexei.jpg";
import softwareLead from "../../images/team/justin.jpeg";

import generic from "../../images/team/generic.png";

import designBackground from "../../images/team/DesignBackground.jpg";
import electricalBackground from "../../images/team/ElectricalBackground.jpg";
import mechanicalBackground from "../../images/team/MechanicalBackground.jpg";
import softwareBackground from "../../images/team/SoftwareBackground.jpg";

export const teamData = {

    Technical: [
      {
        name: "Andrew Ni",
        role: "Electrical Lead",
        img: electricalLead1,
      },
      {
        name: "Fange Wu",
        role: "Electrical Lead",
        img: generic,
      },
      {
        name: "Jacky Peng",
        role: "Mechanical Lead",
        img: generic,
      },
      {
        name: "Justin Prasad",
        role: "Software Lead",
        img: softwareLead,
      },
    ],

    Design: [
      {
        name: "Alexei Machkevitch",
        role: "Art and Design Lead",
        img: generic,
      },
    ],

    Executive: [
      {
        name: "Lisa Huang",
        role: "Project Lead",
        img: projectLead2,
      },
      {
        name: "Lisa Ni",
        role: "Project Lead",
        img: projectLead1,
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

import React from "react";
import Collage from "../components/Home/Collage";
import EventCarousel from "../components/Home/EventCarousel";
import Hero from "../components/Home/Hero";
import Template from "../components/Template/template";

const Landing = () => (
  <Template>
    <Hero />
    <Collage />
    <EventCarousel />
  </Template>
);

export default Landing;

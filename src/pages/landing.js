import React from "react";
import Collage from "../components/Home/Collage";
import Hero from "../components/Home/Hero";
import Template from "../components/Template/template";

const Landing = () => (
  <Template currentPage="home">
    <Hero />
    <Collage />
  </Template>
);

export default Landing;

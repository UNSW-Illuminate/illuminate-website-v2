import * as React from "react";
import Collage from "../components/Home/Collage";
import EventCarousel from "../components/Home/EventCarousel";
import Hero from "../components/Home/Hero";
import Template from "../components/Template/template";

const IndexPage = () => {
  return (
    <Template currentPage="home">
      <Hero />
      <Collage />
      <EventCarousel />
    </Template>
  );
};

export default IndexPage;

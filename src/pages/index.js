import * as React from "react";
import Collage from "../components/Home/Collage";
import Hero from "../components/Home/Hero";
import Template from "../components/Template/template";

const IndexPage = () => {
  return (
    <Template currentPage="home">
      <title>UNSW Illuminate</title>
      <Hero />
      <Collage />
    </Template>
  );
};

export default IndexPage;

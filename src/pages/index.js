import * as React from "react";
import Collage from "../components/Home/Collage";
import Hero from "../components/Home/Hero";
import Template from "../components/Template/template";

const IndexPage = () => {
  return (
    <Template currentPage="home">
      <head>
        <title>UNSW Illuminate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <Hero />
      <Collage />
    </Template>
  );
};

export default IndexPage;

export function Head() {
  return <title>Hello World</title>;
}

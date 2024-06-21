import * as React from "react";
import About from "../components/Home/About";
import Collage from "../components/Home/Collage";
import Hero from "../components/Home/Hero";
import MobileList from "../components/Home/MobileList";
import Template from "../components/Template/template";
import useMediaQuery from "../hooks/useMediaQuery";

const IndexPage = () => {
  const isLaptop = useMediaQuery("(min-width: 1200px)");
  return (
    <Template currentPage="home">
      <head>
        <title>UNSW Illuminate</title>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
      </head>
      <Hero />
      {/* Commenting this out until fixed */}
      {/* <About /> */}
      {isLaptop ? <Collage /> : <MobileList />}
    </Template>
  );
};

export default IndexPage;

export function Head() {
  return <title>UNSW Illuminate</title>;
}

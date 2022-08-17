import * as React from "react";
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
      {isLaptop ? <Collage /> : <MobileList />}
    </Template>
  );
};

export default IndexPage;

export function Head() {
  return <title>Hello World</title>;
}

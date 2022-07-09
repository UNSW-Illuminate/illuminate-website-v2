import * as React from "react";
import Navbar from "../components/Home/Navbar";
import FigmaImg from "../images/figmaAbout.png";
import "../components/About/styles/info.scss";
import "../components/About/styles/journey.scss";
import timeline from "../images/illuminateTimeline.svg";
import useMediaQuery from "../hooks/useMediaQuery";
import verticalTimeline from "../images/verticalTimeline.svg";
import Template from "../components/Template/template";

const AboutPage = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return (
    <Template currentPage="about">
      <div className="wrapper">
        <div className="infoCont">
          <div className="infoTitle">Our culture, values and beliefs</div>
          <div className="valuesCont">
            <div className="valueBox">
              <div className="valueHeading">Multi-disciplinary</div>
              <div className="valueBody">
                UNSW Illuminate is a student society that combines the
                creativity of art and the innovation of engineering to
                demonstrate the magic of art meeting technology
              </div>
            </div>
            <div className="valueBox">
              <div className="valueHeading">Practical Experience</div>
              <div className="valueBody">
                We aim to empower students to apply hands-on skills on large
                scale, professional, and multidisciplinary projects and to
                foster deep interactions designers and engineers.
              </div>
            </div>
            <div className="valueBox">
              <div className="valueHeading">Teamwork</div>
              <div className="valueBody">
                We aim to allow studetns to work together to realise and
                actualise their creative vision while gaining practical
                experience in the process.
              </div>
            </div>
          </div>
        </div>
        <div className="journeyCont">
          <div className="journeyTitle">Our Journey</div>
          <div className="timelineCont">
            <div className="journeyBodyCont">
              <div className="journeyBody" id="journey1">
                UNSW Illuminate began in 2015 and was originally a project under
                UNSW's CREATE Student Society.
              </div>
              {isDesktop ? (
                <img src={timeline} className="timelineImg" id="timeline" />
              ) : (
                <img src={verticalTimeline} id="timeline" />
              )}
              <div className="journeyBody" id="journey2">
                In 2020, we further expanded and officially became a society at
                UNSW.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default AboutPage;

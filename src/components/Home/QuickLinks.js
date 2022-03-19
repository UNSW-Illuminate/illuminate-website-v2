import * as React from "react";
import QuickLink from "./QuickLink";
import "./styles/QuickLinks.scss";
import Illuminate from "../../images/illuminateLogo.svg";
import Team from "../../images/team.svg";
import Blog from "../../images/blog.png";

const QuickLinks = () => {
  return (
    <div className="quick-container">
        <QuickLink icon={Illuminate} title="About Us"/>
        <QuickLink icon={Team} title="Our Team"/>
        <QuickLink icon={Blog} title="Blogs"/>
    </div>
    );
};

export default QuickLinks;

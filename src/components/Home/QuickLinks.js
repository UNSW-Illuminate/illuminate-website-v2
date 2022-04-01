import * as React from "react";
import QuickLink from "./QuickLink";
import "./styles/QuickLinks.scss";
import Logo from "../../images/logo.png";
import Team from "../../images/team.svg";
import Blog from "../../images/blog.svg";

const QuickLinks = () => {
  return (
    <div className="quick-container">
        <QuickLink icon={Logo} title="About Us" link="/about"/>
        <QuickLink icon={Team} title="Our Team" link="/team"/>
        <QuickLink icon={Blog} title="Blogs" link="/blogs"/>
    </div>
    );
};

export default QuickLinks;

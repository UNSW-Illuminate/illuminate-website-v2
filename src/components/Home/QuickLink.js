import { Link } from "gatsby";
import * as React from "react";
import "./styles/QuickLinks.scss";

const QuickLink = ({icon, title, link}) => {

  return (
    <div className="link-container">
      <Link to={link}>
        <img className="image-box" src={icon} alt={title} />
        <h2 className="heading-text">{title}</h2>
      </Link>
    </div>
  );
};

export default QuickLink;

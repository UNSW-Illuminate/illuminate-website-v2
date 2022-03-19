import * as React from "react";
import "./styles/QuickLinks.scss";

const QuickLink = ({icon, title}) => {

  return (
    <div className="link-container">
      <img className="image-box" src={icon} alt={title} />
      <h2 className="heading-text">{title}</h2>
    </div>
  );
};

export default QuickLink;

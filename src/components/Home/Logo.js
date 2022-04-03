import * as React from "react";
import "./styles/Footer.scss";

const Logo = ({original, hover, title}) => {

  return (
    <img className="icon-dimension" src={original} alt={title} id={title} />
  );
};

export default Logo;

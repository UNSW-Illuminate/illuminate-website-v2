import * as React from "react";
import "./styles/Footer.scss";

const Logo = ({original, hover, title}) => {

  return (
    <div className="icon-dimension">
      <img className="icon-dimension" src={original} alt={title} id={title} />
    </div>
  );
};

export default Logo;

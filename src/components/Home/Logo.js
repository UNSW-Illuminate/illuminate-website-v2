import * as React from "react";
import "./styles/Footer.scss";

const Logo = ({original, hover, title}) => {

  return (
    <div>
      <img className="icon-dimension" src={original} alt={title} />
    </div>
  );
};

export default Logo;

import React from "react";
import pancake from "../../images/projects/pancake.jpg";
import "./styles/articleCard.scss";
import { BsStack } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiCalendar } from "react-icons/hi";

const ArticleCard = () => {
  return (
    <div className="articleCard">
      <img className="articleThumbnail" src={pancake}></img>
      <div className="articleInformation">
        <div className="articleTitle">Celestial Pancake</div>
        <div className="articleDescriptorWrapper">
          <div className="articleDescriptor">
            <FaMapMarkerAlt />
            Vivid
          </div>
          <div className="articleDescriptor">
            <HiCalendar size={"1.1em"} />
            2019
          </div>
          <div className="articleDescriptor">
            <BsStack size={"1em"} />
            Wood, LED, Optic Fibres
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

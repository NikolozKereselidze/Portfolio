import React from "react";
import "./Card.scss";

import { FaAngleRight } from "react-icons/fa";

const Initial = ({
  img,
  heading,
  description,
  highlight,
  category,
  isReversed,
  link,
}) => {
  if (isReversed !== "true") {
    return (
      <div className="card">
        <div className="card--image">
          <img src={img} alt="" className="card--image-content" />
        </div>
        <div className="card--content">
          <div className="card--title">
            <h5 className="heading--bold heading--bold-5 card--heading">
              {heading}
            </h5>
            <h3 className="heading--light heading--light-3 card--heading-description">
              {description} {""}
              <span className="text--highlight">{highlight}</span>
            </h3>
          </div>
          <div className="card--category heading--light heading--light-5">
            <h5 className="heading--light heading--light-5 ">{category}</h5>
          </div>
          <button className="card--content-button">
            <a href={link} target="_blank">
              View Work
            </a>
            <FaAngleRight className="card--content-icon" />
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="card">
      <div className="card--content">
        <div className="card--title">
          <h5 className="heading--bold heading--bold-5 card--heading">
            {heading}
          </h5>
          <h3 className="heading--light heading--light-3 card--heading-description">
            {description} {""}
            <span className="text--highlight">{highlight}</span>
          </h3>
        </div>
        <div className="card--category">
          <h5 className="heading--light heading--light-5">{category}</h5>
        </div>
        <button className="card--content-button">
          <a href={link} target="_blank">
            View Work{" "}
          </a>
          <FaAngleRight className="card--content-icon" />
        </button>
      </div>
      <div className="card--image">
        <img src={img} alt="" className="card--image-content" />
      </div>
    </div>
  );
};

const Card = ({
  img,
  heading,
  description,
  highlight,
  category,
  isReversed,
  link,
}) => {
  return (
    <Initial
      img={img}
      heading={heading}
      description={description}
      highlight={highlight}
      category={category}
      isReversed={isReversed}
      link={link}
    />
  );
};

export default Card;

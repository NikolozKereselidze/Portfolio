import React from "react";
import "./Work.scss";

import Image1 from "../../assets/Restaurant.jpg";
import Image2 from "../../assets/Bankist.jpg";
import Image3 from "../../assets/Technology.jpg";
import Card from "../Card/Card";

const Work = () => {
  return (
    <section className="work" id="work">
      <div className="work--header">
        <h3 className="heading--light heading--light-3 work--heading">
          Selected <span className="text--highlight">Works</span>
        </h3>
      </div>
      <Card
        img={Image1}
        heading="Food Order Website"
        description=" Premium Food Delivery Service With Affordable and Healthy Meals To"
        highlight="As Many People As Possible."
        category="Website Design"
        isReversed="false"
        link={"https://omnifoodsdelivery.netlify.app/"}
      />

      <Card
        img={Image2}
        heading="Bankist Website"
        description="fictitious and minimalistic online banking application that"
        highlight="offers the user various services."
        category="Website Design"
        isReversed="true"
        link="https://georgianbankist.netlify.app/"
      />

      <Card
        img={Image3}
        heading="OpenAi"
        description="Generative Pre-trained Transformer 3 template model that uses deep learning to"
        highlight="produce human-like text"
        category="Template Design"
        isReversed="false"
        link="https://open-aigpt3.netlify.app/"
      />
    </section>
  );
};

export default Work;

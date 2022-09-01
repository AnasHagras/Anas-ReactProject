import React from "react";
import Swiper from "./Swiper";

const Section = (props) => {
  return (
    <div className="section">
      <h2 className="section-title">{props.title}</h2>
      <p className="section-desc">{props.desc}</p>
      <button className="explore-button">Explore Python</button>
      <Swiper courses={props.courses}></Swiper>
    </div>
  );
};

export default Section;

import React from "react";
import CourseContainer from "./CourseContainer";

const Swiper = (props) => {
  return (
    <div className="swiper mySwiper">
      <CourseContainer courses={props.courses}></CourseContainer>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default Swiper;

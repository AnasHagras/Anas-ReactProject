import React from "react";
import CourseContainer from "./CourseContainer";

const Swiper = () => {
  return (
    <div className="swiper mySwiper">
      <CourseContainer></CourseContainer>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default Swiper;

import React from "react";

const Course = (props) => {
  const course = props.course;
  return (
    <div className="course swiper-slide" key={course["id"]}>
      <img
        src={course["image"]}
        alt={"Python Course" + course["id"]}
        className="course-image"
      ></img>
      <h3 className="course-title">{course["title"]}</h3>
      <p className="course-author">{course["author"]}</p>
      <div className="course-rate">
        <span className="rate-number">{course["rating"]} </span>
        <i className="rate-star fa-solid fa-star"></i>
        <i className="rate-star fa-solid fa-star"></i>
        <i className="rate-star fa-solid fa-star"></i>
        <i className="rate-star fa-solid fa-star"></i>
        <i className="rate-star fa-solid fa-star-half-stroke"></i>
        <span className="rate-people"> ({course["people"]})</span>
      </div>
      <div className="course-price">{course["price"]}</div>
    </div>
  );
};

export default Course;

import React from "react";

const Course = (props) => {
  // console.log("GG");
  let obj = props["course"];
  // console.log(obj);
  return (
    <div className="course swiper-slide" key={obj["id"]}>
      <img
        src={obj["image"]}
        alt={"Python Course" + obj["id"]}
        className="course-image"
      ></img>
      <h3 className="course-title">{obj["title"]}</h3>
      <p className="course-author">{obj["author"]}</p>
      <div className="course-rate">
        <span className="rate-number">{obj["rating"]} </span>
        <i className="rate-star fa-solid fa-star"></i>
        <i className="rate-star fa-solid fa-star"></i>
        <i className="rate-star fa-solid fa-star"></i>
        <i className="rate-star fa-solid fa-star"></i>
        <i className="rate-star fa-solid fa-star-half-stroke"></i>
        <span className="rate-people"> ({obj["people"]})</span>
      </div>
      <div className="course-price">{obj["price"]}</div>
    </div>
  );
};

export default Course;

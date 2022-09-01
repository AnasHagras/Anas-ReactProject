import React from "react";
import Course from "./Course";

const CourseContainer = (props) => {
  let courses = props.courses;
  return (
    <div className="course-container swiper-wrapper">
      {courses.map((course) => {
        return <Course course={course} key={course.id} />;
      })}
    </div>
  );
};

export default CourseContainer;

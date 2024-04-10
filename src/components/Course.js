import React, { useState } from "react";

function Course(props) {
  const { course, setCourses } = props;

  return (
    // <div>
    //   <h4> ID: {course.id}</h4>
    //   <h4> Title: {course.title}</h4>
    //   </div>
    <div className="card m-5">
      <div className="card-header">{course.courseid}</div>
      <div className="card-body">
        <h5 className="card-title">{course.coursename}</h5>
        <p className="card-text">{course.coursedesc}</p>
        <a href="#" className="btn btn-danger">
          Delete
        </a>
      </div>
    </div>
  );
}

export default Course;

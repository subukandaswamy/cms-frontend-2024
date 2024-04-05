import React, { useState } from "react";

function Course(props) {
  const { course, setCourses } = props;

  return (
    // <div>
    //   <h4> ID: {course.id}</h4>
    //   <h4> Title: {course.title}</h4>
    //   </div>
    <div class="card m-5">
      <div class="card-header">{course.id}</div>
      <div class="card-body">
        <h5 class="card-title">{course.title}</h5>
        <p class="card-text">
          senior software design project course aka capstone
        </p>
        <a href="#" class="btn btn-danger">
          Delete
        </a>
      </div>
    </div>
  );
}

export default Course;

import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Course from "./components/Course";
import Other from "./components/Other";

function App() {
  // const courseVal = {
  //   id: "CPTS422",
  //   title: "Software Testing",
  // };
  const coursesVal = [
    {
      id: "CPTS422",
      title: "Software Testing",
    },
    {
      id: "CPTS421",
      title: "Capstone 1",
    },
  ];
  const [courses, setCourses] = useState(coursesVal);

  return (
    <div>
      <h1>Courses</h1>
      {courses.map((course) => {
        return <Course course={course} setCourse={setCourses} />;
      })}
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Course from "./components/Course";
import Other from "./components/Other";
import CourseForm from "./components/CourseForm";

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
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/course")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Course Form</h1>
      <CourseForm />
      <h1>Courses List</h1>
      {courses.map((course) => {
        return (
          <Course
            course={course}
            setCourse={setCourses}
            setKey={course.courseid}
          />
        );
      })}
    </div>
  );
}

export default App;

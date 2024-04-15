import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import Course from "./components/Course";
import Other from "./components/Other";
import CourseForm from "./components/CourseForm";
import AlertMessage from "./components/AlertMessage";

export const MessageContext = React.createContext();

function App() {
  const [courses, setCourses] = useState([]);
  const [msg, setMsg] = useState("");
  const sample = useState(0);

  useEffect(() => {
    fetch("http://localhost:4000/api/course")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch(console.error);
  }, [msg]);

  return (
    <MessageContext.Provider value={(setMsg, sample)}>
      <div>
        <h1>Course Form</h1>
        <CourseForm setCourses={setCourses} setMsg={setMsg} />
        {msg.length > 0 && <AlertMessage msg={msg} setMsg={setMsg} />}
        <h1>Courses List</h1>
        {courses.map((course) => {
          return (
            <Course
              course={course}
              setCourse={setCourses}
              setMsg={setMsg}
              key={course.courseid}
            />
          );
        })}
      </div>
    </MessageContext.Provider>
  );
}

export default App;

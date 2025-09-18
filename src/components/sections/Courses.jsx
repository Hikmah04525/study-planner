import React, { useState, useEffect } from "react";
import CourseCard from "../CourseCard";

export default function Courses() {
  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem("courses");
    return saved ? JSON.parse(saved) : [];
  });

  const [newCourse, setNewCourse] = useState("");
  const [instructor, setInstructor] = useState("");
  const [color, setColor] = useState("#4f46e5");

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  const addCourse = (e) => {
    e.preventDefault();
    if (!newCourse.trim()) return;

    const newEntry = {
      id: Date.now(),
      title: newCourse,
      instructor: instructor || "Unknown",
      color,
    };

    setCourses([...courses, newEntry]);
    setNewCourse("");
    setInstructor("");
    setColor("#4f46e5");
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  return (
    <div className="courses-page">
      <h2>📘 My Courses</h2>

      <form className="course-form" onSubmit={addCourse}>
        <input
          type="text"
          placeholder="Course name"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Instructor (optional)"
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
        />
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">Add Course</button>
      </form>

      {courses.length === 0 ? (
        <p className="motivation">
          🌟 Keep learning! Add your first course and take one step closer to
          your goals.
        </p>
      ) : (
        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              instructor={course.instructor}
              color={course.color}
              onDelete={() => deleteCourse(course.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

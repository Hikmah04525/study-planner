import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/sections/Dashboard";
import Tasks from "./components/sections/Tasks";
import Courses from "./components/sections/Courses";
import Calendar from "./components/sections/Calendar";
import Notes from "./components/sections/Notes";
import Pomodoro from "./components/sections/Pomodoro";
import Settings from "./components/sections/Settings";
import "./index.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/pomodoro" element={<Pomodoro />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

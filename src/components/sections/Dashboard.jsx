import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [profile, setProfile] = useState({ name: "", studyGoal: "" });

  useEffect(() => {
    // Load saved profile from localStorage
    const saved = JSON.parse(localStorage.getItem("profile")) || {};
    setProfile(saved);
  }, []);

  const cards = [
    {
      title: "Tasks",
      description: "Track assignments, projects, and deadlines.",
      icon: "✅",
      path: "/tasks",
    },
    {
      title: "Courses",
      description: "View enrolled courses and study materials.",
      icon: "📚",
      path: "/courses",
    },
    {
      title: "Calendar",
      description: "Check your upcoming timetable and events.",
      icon: "🗓️",
      path: "/calendar",
    },
    {
      title: "Notes",
      description: "Save quick notes and study ideas.",
      icon: "📝",
      path: "/notes",
    },
    {
      title: "Pomodoro",
      description: "Boost focus with Pomodoro timer.",
      icon: "⏱️",
      path: "/pomodoro",
    },
    {
      title: "Settings",
      description: "Adjust your preferences and theme.",
      icon: "⚙️",
      path: "/settings",
    },
  ];

  return (
    <div className="dashboard">
      {/* Personalized Greeting */}
      <h1>
        {profile.name
          ? `👋 Welcome back, ${profile.name}`
          : "📊 Dashboard Overview"}
      </h1>
      {profile.studyGoal && (
        <p style={{ marginBottom: "1rem", fontWeight: "bold", color: "var(--primary)" }}>
          🎯 Goal: {profile.studyGoal}
        </p>
      )}

      {/* Cards */}
      <div className="grid">
  {cards.map((card, idx) => (
    <Link to={card.path} key={idx} className="card">
      <div className="card-icon">{card.icon}</div>
      <h2>{card.title}</h2>
      <p>{card.description}</p>
    </Link>
  ))}
</div>

    </div>
  );
}

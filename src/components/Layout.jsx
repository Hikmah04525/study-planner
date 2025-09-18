import { Link } from "react-router-dom";
import {
  FaHome,
  FaTasks,
  FaBook,
  FaClock,
  FaCog,
  FaHourglassHalf,
} from "react-icons/fa";

const NAV_ITEMS = [
  { key: "dashboard", label: "Dashboard", icon: <FaHome />, path: "/" },
  { key: "tasks", label: "Tasks", icon: <FaTasks />, path: "/tasks" },
  { key: "courses", label: "Courses", icon: <FaBook />, path: "/courses" },
  { key: "calendar", label: "Calendar", icon: <FaClock />, path: "/calendar" },
  { key: "pomodoro", label: "Pomodoro", icon: <FaHourglassHalf />, path: "/pomodoro" },
  { key: "Notes", label: "Notes", icon: <FaBook />, path: "/Notes" },
  { key: "settings", label: "Settings", icon: <FaCog />, path: "/settings" },
];

export default function Layout({ darkMode, setDarkMode, children }) {
  return (
    <div className="app-layout">
      {/* Sidebar */}
      <aside className="sidebar" aria-label="Main sidebar">
        <h2>📚 Planner</h2>
        <nav aria-label="Main navigation" className="sidebar-nav">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <Link to={item.path} className="nav-item">
                  <span className="icon">{item.icon}</span>
                  <span className="label">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Dark Mode Toggle - pinned bottom */}
        <div className="sidebar-footer">
          <button
            className="toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
            aria-pressed={darkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">{children}</main>
    </div>
  );
}

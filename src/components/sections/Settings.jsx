import { useState, useEffect } from "react";

export default function Settings() {
  const [name, setName] = useState("");
  const [studyGoal, setStudyGoal] = useState("");

  // Load saved profile on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("profile"));
    if (saved) {
      setName(saved.name || "");
      setStudyGoal(saved.studyGoal || "");
    }
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    const profile = { name, studyGoal };
    localStorage.setItem("profile", JSON.stringify(profile));
    alert("✅ Profile updated!");
  };

  return (
    <div className="settings-page">
      <h1>⚙️ Settings</h1>
      <form onSubmit={handleSave} className="settings-form">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </label>

        <label>
          Study Goal:
          <input
            type="text"
            value={studyGoal}
            onChange={(e) => setStudyGoal(e.target.value)}
            placeholder="E.g. Finish 2 chapters daily"
          />
        </label>

        <button type="submit">💾 Save</button>
      </form>
    </div>
  );
}

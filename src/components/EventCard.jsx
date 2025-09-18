import React from "react";

export default function EventCard({ title, date, onDelete }) {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <p>{new Date(date).toLocaleDateString()}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

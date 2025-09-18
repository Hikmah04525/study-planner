import React, { useState, useEffect } from "react";
import EventCard from "../EventCard";

export default function Calendar() {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("events");
    if (saved) {
      setEvents(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const addEvent = (e) => {
    e.preventDefault();
    if (!title.trim() || !date) return;
    const newEvent = { id: Date.now(), title, date };
    setEvents([...events, newEvent]);
    setTitle("");
    setDate("");
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className="calendar-page">
      <h2>📅 Calendar</h2>

      {/* Event Form */}
      <form onSubmit={addEvent} className="event-form">
        <input
          type="text"
          placeholder="Event title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Add Event</button>
      </form>

      {/* Events List */}
      <div className="events-list">
        {events.length === 0 ? (
          <p className="motivation">
              No events yet! Stay organized and add one.
          </p>
        ) : (
          events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              onDelete={() => deleteEvent(event.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}

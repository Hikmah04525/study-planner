import { useState, useEffect } from "react";

export default function Notes() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (title.trim() === "" && content.trim() === "") return;
    const newNote = {
      id: Date.now(),
      title,
      content,
    };
    setNotes([...notes, newNote]);
    setTitle("");
    setContent("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="notes-page">
      <h2>📝 Notes</h2>

      <div className="note-form">
        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write your note here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={addNote}>Add Note</button>
      </div>

      {notes.length === 0 ? (
        <p className="motivation">✨ Start capturing your thoughts  your mind will thank you!</p>
      ) : (
        <div className="notes-grid">
          {notes.map((note) => (
            <div key={note.id} className="note-card">
              <h3>{note.title || "Untitled"}</h3>
              <p>{note.content}</p>
              <button className="delete-btn" onClick={() => deleteNote(note.id)}>
                ❌ Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

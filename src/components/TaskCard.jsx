export default function TaskCard({ title, dueDate, category, completed, onToggle, onDelete }) {
  return (
    <div className={`task-card ${completed ? "completed" : ""}`}>
      <div>
        <span>{title}</span>
        {dueDate && <small> ⏰ {dueDate}</small>}
        <div className="task-category">📂 {category}</div>
      </div>
      <div className="task-actions">
        <button onClick={onToggle}>{completed ? "Undo" : "Complete"}</button>
        <button className="delete-btn" onClick={onDelete}>❌</button>
      </div>
    </div>
  );
}

export default function CourseCard({ title, instructor, color, onDelete }) {
  return (
    <div className="course-card" style={{ borderLeft: `6px solid ${color || "#4f46e5"}` }}>
      <div className="course-info">
        <h3>{title}</h3>
        <p>{instructor}</p>
      </div>
      <button
        className="delete-btn"
        onClick={onDelete}
        aria-label={`Delete course ${title}`}
      >
        ❌
      </button>
    </div>
  );
}

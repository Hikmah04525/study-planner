import React from "react";

export default function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div className="category-filter">
      {["All", ...categories].map((cat) => (
        <button
          key={cat}
          className={`filter-btn ${selected === cat ? "active" : ""}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

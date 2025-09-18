import { useState, useEffect } from "react";
import TaskCard from "../TaskCard";
import CategoryFilter from "../CategoryFilter";

export default function Tasks() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });
  const [newTask, setNewTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("Work");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) return;
    const newTaskObj = {
      id: Date.now(),
      title: newTask,
      dueDate,
      category,
      completed: false,
    };
    setTasks([...tasks, newTaskObj]);
    setNewTask("");
    setDueDate("");
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const categories = [...new Set(tasks.map(t => t.category))];

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((t) => t.category === filter);

  const allCompleted = tasks.length > 0 && tasks.every(t => t.completed);

  return (
    <div className="tasks-page">
      <h1>Tasks</h1>

      {/* Category Filter */}
      <CategoryFilter
        categories={categories}
        selected={filter}
        onSelect={setFilter}
      />

      {/* Task Form */}
      <div className="task-form">
        <input
          type="text"
          placeholder="Enter task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Work</option>
          <option>Study</option>
          <option>Personal</option>
          <option>Spritual</option>
        </select>
        <button onClick={addTask}>Add</button>
      </div>

      {/* Task List */}
      <div>
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            {...task}
            onToggle={() => toggleComplete(task.id)}
            onDelete={() => deleteTask(task.id)}
          />
        ))}
      </div>

      {allCompleted && (
        <div className="motivation">🎉 Great job! All tasks completed! 🎉</div>
      )}
    </div>
  );
}

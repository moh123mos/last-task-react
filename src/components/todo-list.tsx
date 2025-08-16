import { useState } from "react";
const TodoList = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState<string>("");
  const [error, setError] = useState<string>("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
      setError("");
    } else {
      setError("Task cannot be empty!");
    }
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTask();
      }}
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>Task 5: To-Do List</h2>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="New task..."
          style={{
            flex: 1,
            padding: "8px",
            border: `1px solid ${error ? "red" : "#ccc"}`,
            borderRadius: "4px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 12px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Task
        </button>
      </div>
      {error && (
        <p style={{ color: "red", fontSize: "14px", marginBottom: "10px" }}>
          {error}
        </p>
      )}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px",
              borderBottom: "1px solid #ccc",
            }}
          >
            {t}
            <button
              onClick={() => deleteTask(index)}
              style={{
                backgroundColor: "red",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                padding: "4px 8px",
                cursor: "pointer",
              }}
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "20px", fontSize: "14px", color: "#555" }}>
        <p>- Tasks are stored in an array using `useState`.</p>
        <p>
          - New tasks are added to the array without overwriting existing ones.
        </p>
        <p>- Tasks can be deleted individually.</p>
      </div>
    </form>
  );
};

export default TodoList;

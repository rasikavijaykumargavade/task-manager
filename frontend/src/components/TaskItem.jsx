import React from "react";

const TaskItem = ({ task, deleteTask, toggleComplete, startEditing }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        marginTop: "15px",
        backgroundColor: "#fff",
      }}
    >
      <h3
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          color: task.completed ? "green" : "black",
        }}
      >
        {task.title}
      </h3>

      <p>Status: {task.completed ? "✅ Completed" : "❌ Pending"}</p>

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => toggleComplete(task._id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          onClick={() => startEditing(task)}
          style={{ marginLeft: "8px" }}
        >
          Edit
        </button>

        <button
          onClick={() => deleteTask(task._id)}
          style={{ marginLeft: "8px" }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;

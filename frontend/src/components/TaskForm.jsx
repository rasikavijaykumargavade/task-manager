import React from "react";

const TaskForm = ({
  addTask,
  updateTask,
  editingId,
  editingTitle,
  setEditingTitle,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!editingTitle.trim()) return;

    if (editingId) {
      updateTask();
    } else {
      addTask(editingTitle);
      setEditingTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task..."
        value={editingTitle}
        onChange={(e) => setEditingTitle(e.target.value)}
      />

      <button type="submit">{editingId ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;

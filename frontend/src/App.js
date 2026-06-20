import React, { useEffect, useState } from "react";
import "./App.css";
import API from "./api";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

  // Fetch all tasks
  const fetchTasks = async () => {
    try {
      const res = await API.get("/");
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Add new task
  const addTask = async (title) => {
    try {
      await API.post("/", { title });
      setEditingTitle("");
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      await API.delete(`/${id}`);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  // Complete / Undo task
  const toggleComplete = async (id) => {
    try {
      await API.patch(`/${id}`);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  // Start editing
  const startEditing = (task) => {
    setEditingId(task._id);
    setEditingTitle(task.title);
  };

  // Update task
  const updateTask = async () => {
    try {
      await API.put(`/${editingId}`, {
        title: editingTitle,
      });

      setEditingId(null);
      setEditingTitle("");
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <TaskForm
        addTask={addTask}
        updateTask={updateTask}
        editingId={editingId}
        editingTitle={editingTitle}
        setEditingTitle={setEditingTitle}
      />

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        startEditing={startEditing}
      />
    </div>
  );
}

export default App;

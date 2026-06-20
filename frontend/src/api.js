import axios from "axios";

const API = axios.create({
  baseURL: "https://task-manager-1-1216.onrender.com/api/tasks",
});

export default API;

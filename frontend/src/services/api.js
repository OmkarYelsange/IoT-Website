import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // change to deployed backend URL for production
  timeout: 5000,
});

export default api;

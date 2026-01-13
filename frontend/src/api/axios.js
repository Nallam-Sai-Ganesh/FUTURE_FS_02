import axios from "axios";

const api = axios.create({
  baseURL: "https://future-fs-02-5-63h2.onrender.com/api"
});

// AUTO ADD TOKEN TO HEADERS
api.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export default api;

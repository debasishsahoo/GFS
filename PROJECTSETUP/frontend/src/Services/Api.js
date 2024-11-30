import axios from "axios";
axios.defaults.headers.common['Authorization']=`Bearer${localStorage.getItem('token')}`;
const api = axios.create({
  baseUrl: "http://localhost:5000/api",
});

// setAuthToken

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem('token',token);
  } else {
    delete api.defaults.headers.common["Authorization"];
    localStorage.removeItem('token');
  }
};

export default api;

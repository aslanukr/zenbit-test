import axios from "axios";

// axios.defaults.baseURL = "https://aslanukr-zb-backend.onrender.com/api";
axios.defaults.baseURL = "http://localhost:3001/api";

export const fetchDeals = async () => {
  const { data } = await axios.get("/deals");
  return data;
};

export const registerUser = async (credentials) => {
  const { data } = await axios.post("/users/register", credentials);
  return data;
};

export const logIn = async (credentials) => {
  const { data } = await axios.post("/users/login", credentials);
  return data;
};

export const logOut = async () => {
  const { data } = await axios.post("/users/logout");
  return data;
};

export const current = async () => {
  return axios.get("/users/current");
};

import axios from "axios";

axios.defaults.baseURL = "https://aslanukr-zb-backend.onrender.com/api";

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

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
  token.set(data.token);
  return data;
};

export const logOut = async () => {
  const { data } = await axios.post("/users/logout");
  token.unset();
  return data;
};

export const current = async () => {
  return axios.get("/users/current");
};

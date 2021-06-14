import jwtDecode from "jwt-decode";
import axios from "axios";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/login";

export async function login(username, password) {
  const { data: jwt } = await axios.post(apiEndpoint, { username, password });
  localStorage.setItem("token", jwt.token);
}

export function logout() {
  localStorage.removeItem("token");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

const exportObject = {
  login,
  logout,
  getCurrentUser,
};

export default exportObject;

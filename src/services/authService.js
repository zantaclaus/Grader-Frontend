import jwtDecode from "jwt-decode";
import axios from "axios";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/login";

export async function login(nickName, password) {
  const { data: jwt } = await axios.post(apiEndpoint, { nickName, password });
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

export default {
  login,
  logout,
  getCurrentUser,
};

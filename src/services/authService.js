import jwtDecode from "jwt-decode";
import axios from "axios";
import { apiUrl } from "../config.json";
import { sha256 } from "js-sha256";

const apiEndpoint = apiUrl + "/login";
const apiDestroy = apiUrl + "/destroy-token";

export async function login(usernameCheck, passwordCheck) {
  const username = usernameCheck;
  const password = sha256(passwordCheck);
  const { data: jwt } = await axios.post(apiEndpoint, { username, password });

  localStorage.setItem("token", jwt.token);
  localStorage.setItem("theme", "dark");
}

export function logout() {
  const token = localStorage.getItem("token");
  const header = {
    headers: {
      Authorization: token,
    },
  };
  axios.post(apiDestroy, header);

  localStorage.removeItem("token");
  localStorage.removeItem("theme");
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

import axios from "axios";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/login";

export async function login(nickName, password) {
  return axios.post(apiEndpoint, { nickName, password });
}

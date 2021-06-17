import axios from "axios";
import { apiUrl } from "../config.json";

export function getProblems(userid) {
  return axios.get(apiUrl + `/all-questions/${userid}`);
}

import axios from "axios";
import { apiUrl } from "../config.json";

export function getProblems() {
  const userid = "60c76bb43b3b05150093c9d8";
  return axios.get(apiUrl + `/all-questions?id=${userid}`).catch((error) => {
    console.log(error);
  });
}

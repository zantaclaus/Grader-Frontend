import axios from "axios";
import { useSelector } from "react-redux";
import { apiUrl } from "../config.json";

export function getTasks() {
  const user = useSelector((state) => state.user.user);

  return axios.get(apiUrl + `/all-questions?id=${user.id}`).catch((error) => {
    console.log(error);
  });
}

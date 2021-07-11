import { ActionTypes } from "../contants/action-types";
import axios from "axios";
import { apiUrl } from "../../config.json";

const token = localStorage.getItem("token");
const header = {
  headers: {
    Authorization: token,
  },
};

export const fetchUserDetail = (userId) => async (dispatch) => {
  const response = await axios.get(`${apiUrl}/user?id=${userId}`, header);
  dispatch({ type: ActionTypes.SET_USER_DETAIL, payload: response.data });
};

export const setUser = (user) => {
  return {
    type: ActionTypes.SET_USER,
    payload: user,
  };
};

export const setUserDetail = (user) => {
  return {
    type: ActionTypes.SET_USER_DETAIL,
    payload: user,
  };
};

import axios from "axios";
import { ActionTypes } from "../contants/action-types";
import { apiUrl } from "../../config.json";

export const fetchTasks = (userId) => async (dispatch) => {
  const response = await axios.get(`${apiUrl}/all-questions?id=${userId}`);
  dispatch({ type: ActionTypes.FETCH_TASKS, payload: response.data });
};

export const fetchTask = (userId, taskId) => async (dispatch) => {
  const response = await axios.get(`${apiUrl}/question-id/${userId}/${taskId}`);
  dispatch({ type: ActionTypes.SELECTED_TASK, payload: response.data[0] });
};

export const setTasks = (tasks) => {
  return {
    type: ActionTypes.SET_TASKS,
    payload: tasks,
  };
};

export const selectedTasks = (task) => {
  return {
    type: ActionTypes.SELECTED_TASK,
    payload: task,
  };
};

export const removeSelectedTasks = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_TASK,
  };
};

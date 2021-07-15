import axios from "axios";
import { ActionTypes } from "../contants/action-types";
import { apiUrl } from "../../config.json";

const token = localStorage.getItem("token");
const header = {
  headers: {
    Authorization: token,
  },
};

export const fetchTasks = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${apiUrl}/all-questions?id=${userId}`,
      header
    );
    const changeTitle = response.data.map((task) => ({
      ...task,
      title: `#${task.number} ${task.title}`,
    }));
    dispatch({ type: ActionTypes.FETCH_TASKS, payload: changeTitle });
  } catch (ex) {
    if (ex.response && ex.response.status === 401) {
      window.location = "/logout";
    }
  }
};

export const fetchTask = (userId, taskId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${apiUrl}/question-id/${userId}/${taskId}`,
      header
    );
    dispatch({ type: ActionTypes.SELECTED_TASK, payload: response.data[0] });
  } catch (ex) {
    if (ex.response && ex.response.status === 401) {
      window.location = "/logout";
    }
  }
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

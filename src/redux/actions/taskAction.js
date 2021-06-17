import { ActionTypes } from "../contants/action-types";

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

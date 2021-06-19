import { ActionTypes } from "../contants/action-types";

const initialState = {
  tasks: [],
};
export const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_TASKS:
      return { ...state, tasks: payload };
    default:
      return state;
  }
};

export const selectedTaskReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_TASK:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_TASK:
      return {};
    default:
      return state;
  }
};

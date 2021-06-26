import { ActionTypes } from "../contants/action-types";

export const pageReducer = (state = 0, { type }) => {
  switch (type) {
    case ActionTypes.PAGE_INCREMENT:
      return state + 1;
    case ActionTypes.PAGE_DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

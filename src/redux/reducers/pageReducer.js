import { ActionTypes } from "../contants/action-types";

export const pageReducer = (state = 1, { type, payload }) => {
  switch (type) {
    case ActionTypes.PAGE_INCREMENT:
      return state + 1;
    case ActionTypes.PAGE_DECREMENT:
      return state - 1;
    case ActionTypes.SET_PAGE:
      return payload;
    default:
      return state;
  }
};

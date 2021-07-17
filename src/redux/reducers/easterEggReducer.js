import { ActionTypes } from "../contants/action-types";

export const easterEggReducer = (state = false, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_EASTEREGG:
      return !state;
    default:
      return state;
  }
};

import { ActionTypes } from "../contants/action-types";

export const codeReducer = (state = "", { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CODE:
      return payload;
    default:
      return state;
  }
};

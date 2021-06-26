import { ActionTypes } from "../contants/action-types";

export const dropdownReducer = (state = "All Units", { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_TITLE:
      return payload;
    default:
      return state;
  }
};

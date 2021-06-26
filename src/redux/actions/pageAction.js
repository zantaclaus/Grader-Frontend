import { ActionTypes } from "../contants/action-types";

export const pageIncrement = (user) => {
  return {
    type: ActionTypes.PAGE_INCREMENT,
  };
};

export const pageDecrement = (user) => {
  return {
    type: ActionTypes.PAGE_DECREMENT,
  };
};

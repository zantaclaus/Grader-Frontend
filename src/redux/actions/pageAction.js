import { ActionTypes } from "../contants/action-types";

export const pageIncrement = () => {
  return {
    type: ActionTypes.PAGE_INCREMENT,
  };
};

export const pageDecrement = () => {
  return {
    type: ActionTypes.PAGE_DECREMENT,
  };
};

export const setPage = (page) => {
  return {
    type: ActionTypes.SET_PAGE,
    payload: page,
  };
};

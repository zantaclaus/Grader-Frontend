import { ActionTypes } from "../contants/action-types";

const intialState = {
  user: {},
};

export const userReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
};

export const userDetailReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USER_DETAIL:
      return { ...state, user: payload };
    default:
      return state;
  }
};

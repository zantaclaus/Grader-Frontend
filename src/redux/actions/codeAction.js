import { ActionTypes } from "../contants/action-types";

export const setCode = (code) => {
  return {
    type: ActionTypes.SET_CODE,
    payload: code,
  };
};

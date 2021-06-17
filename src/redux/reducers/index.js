import { combineReducers } from "redux";
import { taskReducer } from "./taskReducer";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
  allTasks: taskReducer,
  user: userReducer,
});

export default reducers;

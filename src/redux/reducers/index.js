import { combineReducers } from "redux";
import { taskReducer, selectedTaskReducer } from "./taskReducer";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
  allTasks: taskReducer,
  task: selectedTaskReducer,
  user: userReducer,
});

export default reducers;

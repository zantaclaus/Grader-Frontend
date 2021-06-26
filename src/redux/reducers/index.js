import { combineReducers } from "redux";
import { taskReducer, selectedTaskReducer } from "./taskReducer";
import { userReducer } from "./userReducer";
import { pageReducer } from "./pageReducer";

const reducers = combineReducers({
  allTasks: taskReducer,
  task: selectedTaskReducer,
  user: userReducer,
  page: pageReducer,
});

export default reducers;

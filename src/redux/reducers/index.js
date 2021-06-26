import { combineReducers } from "redux";
import { taskReducer, selectedTaskReducer } from "./taskReducer";
import { userReducer } from "./userReducer";
import { pageReducer } from "./pageReducer";
import { dropdownReducer } from "./dropdownReducer";

const reducers = combineReducers({
  user: userReducer,
  allTasks: taskReducer,
  task: selectedTaskReducer,
  page: pageReducer,
  title: dropdownReducer,
});

export default reducers;

import { combineReducers } from "redux";
import { taskReducer, selectedTaskReducer } from "./taskReducer";
import { userReducer, userDetailReducer } from "./userReducer";
import { pageReducer } from "./pageReducer";
import { dropdownReducer } from "./dropdownReducer";
import { codeReducer } from "./codeReducer";
import { easterEggReducer } from "./easterEggReducer";

const reducers = combineReducers({
  user: userReducer,
  userDetail: userDetailReducer,
  allTasks: taskReducer,
  task: selectedTaskReducer,
  page: pageReducer,
  selectedUnit: dropdownReducer,
  code: codeReducer,
  swap: easterEggReducer,
});

export default reducers;

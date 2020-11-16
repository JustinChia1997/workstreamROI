import variableReducer from "./variables";
import { combineReducers } from "redux";

//This function combines the different reducers should the project get larger
const allReducers = combineReducers({
  variables: variableReducer,
});

export default allReducers;

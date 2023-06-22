import { combineReducers } from "@reduxjs/toolkit";
import carReducer from "./account.reducer";

const TestProjectReducer = combineReducers({
  car: carReducer,
});

export default TestProjectReducer;

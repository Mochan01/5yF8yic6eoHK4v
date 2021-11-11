import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import actionReducer from "./action";

const reducer = combineReducers({
  action: actionReducer,
});

const store = configureStore({ reducer });

export default store;

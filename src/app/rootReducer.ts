import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import usersReducer from "../features/userlist/userSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
});

export default rootReducer;

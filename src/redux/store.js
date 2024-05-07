import { configureStore } from '@reduxjs/toolkit';

import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from "./Reducers/userReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'; // Assuming in node_modules

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
});

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const middleware = [thunk];

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production' ? composeWithDevTools() : undefined, // Enable DevTools in development only
  preloadedState: userInfoFromLocalStorage,
});

export default store;

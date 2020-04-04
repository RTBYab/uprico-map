import auth from "./auth";
import alert from "./alert";
import store from "./store";
import post from "./post";
import profile from "./profile";
import { combineReducers } from "redux";

export default combineReducers({ alert, auth, profile, store, post });

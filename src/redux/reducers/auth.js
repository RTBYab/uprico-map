import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  // AUTH_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_PROFILE
  // LOGIN_FAIL
} from "../actions/index";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
  redirect: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: false,
        loading: false,
        redirect: true
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_FAIL:
    case LOGOUT:
    case CLEAR_PROFILE:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: null,
        loading: false
      };
    default:
      return state;
  }
}

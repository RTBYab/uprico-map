import axios from "axios";
import { setAlert } from "../actions/alert";
import {
  LOGOUT,
  LOGIN_FAIL,
  AUTH_FAIL,
  USER_LOADED,
  CLEAR_PROFILE,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS
} from "../actions/index";
import setAuthToken from "../../utils/setAuthToken";

// LOAD USER
export const loadUser = id => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(`http://localhost:8080/api/cuser/${id}`);
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: AUTH_FAIL
    });
  }
};

export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post(
      "http://localhost:8080/api/signup",
      body,
      config
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.foreach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post(
      "http://localhost:8080/api/signin",
      body,
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.foreach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

export const logout = () => dispatch => {
  dispatch({
    type: CLEAR_PROFILE
  });
  dispatch({
    type: LOGOUT
  });
};

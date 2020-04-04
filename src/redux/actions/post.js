import axios from "axios";
import Const from "../../utils/constants";
import {
  ADD_POST,
  GET_POST,
  DELETE_POST,
  UPDATE_POST,
  GET_STORE_POST
} from "./index";

export const addNewPost = ({
  id,
  title,
  photo,
  caption,
  history
}) => async dispatch => {
  console.log("ahhhha", photo);
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data"
    }
  };

  let bodyFormData = new FormData();
  bodyFormData.append("photo", photo);

  bodyFormData.append("title", title);
  bodyFormData.append("body", caption);

  try {
    const res = await axios.post(
      Const.URL.Main + `post/new/${id}`,
      bodyFormData,
      config
    );
    dispatch({
      type: ADD_POST,
      payload: res.data
    });
    history.goBack();
  } catch (e) {
    console.log(e);
  }
};

export const getPosts = id => async dispatch => {
  const config = {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.get(Const.URL.Main + `posts/${id}`, config);
    dispatch({
      type: GET_STORE_POST,
      payload: res.data
    });
  } catch (e) {
    console.log(e);
  }
};

export const getPost = id => async dispatch => {
  const config = {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.get(Const.URL.Main + `post/${id}`, config);
    dispatch({
      type: GET_POST,
      payload: res.data
    });
  } catch (e) {
    console.log(e);
  }
};

export const updatePost = (
  id,
  token,
  title,
  caption,
  history
) => async dispatch => {
  const config = {
    headers: {
      accept: "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  };
  // const fileName = photo.split("/").pop();

  let bodyFormData = new FormData();
  // bodyFormData.append("photo", {
  //   uri: photo,
  //   name: fileName
  // });

  bodyFormData.append("title", title);
  bodyFormData.append("body", caption);
  try {
    const res = await axios.put(
      Const.URL.Main + `post/${id}`,
      bodyFormData,
      config
    );
    dispatch({
      type: UPDATE_POST,
      payload: res.data
    });
    history.goBack();
  } catch (e) {
    console.log(e);
  }
};

export const deletePost = (id, token, history) => async dispatch => {
  const config = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  };
  try {
    await axios.delete(Const.URL.Main + `posts/${id}`, config);
    dispatch({
      type: DELETE_POST,
      payload: id
    });
    history.geBack();
  } catch (e) {
    console.log(e);
  }
};

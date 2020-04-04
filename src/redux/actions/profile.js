import axios from "axios";
import { setAlert } from "./alert";
import Const from "../../utils/constants";
import { GET_PROFILE, PROFILE_ERROR } from "./index";

export const getCurrentProfile = id => async dispatch => {
  console.log(id, "idddd");
  try {
    const res = await axios.get(Const.URL.Main + `cuser/${id}`);
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

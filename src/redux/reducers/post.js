import {
  GET_POST,
  ADD_POST,
  DELETE_POST,
  GET_STORE_POST
} from "../actions/index";

const initialState = {
  post: null,
  posts: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_POST:
      return {
        ...state,
        loading: false,
        posts: [payload, ...state.posts]
      };
    case GET_STORE_POST:
      return {
        ...state,
        loading: false,
        posts: payload
      };
    case GET_POST:
      return {
        ...state,
        loading: false,
        post: payload
      };
    case DELETE_POST:
      return {
        ...state,
        loading: false,
        posts: state.posts.filter(post => post._id !== payload)
      };

    default:
      return state;
  }
}

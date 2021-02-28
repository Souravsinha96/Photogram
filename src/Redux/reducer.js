import posts from "../data/posts";
import { combineReducers } from "redux";

const postReducer = (state = posts, action) => {
  switch (action.type) {
    case "REMOVE_POST":
      return state.filter((post) => post.id !== action.payload);
    case "ADD_POST":
      return [...state, action.payload];
    default:
      return state;
  }
};

const commentReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      if (!state[action.payload1]) {
        return { ...state, [action.payload1]: [action.payload] };
      } else {
        return {
          ...state,
          [action.payload1]: [...state[action.payload1], action.payload],
        };
      }

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer,
});
export default rootReducer;

import posts from "../data/posts";
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
export default postReducer;

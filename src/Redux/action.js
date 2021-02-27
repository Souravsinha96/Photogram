//remove
export const removePost = (index) => {
  return {
    type: "REMOVE_POST",
    payload: index,
  };
};

//adding post
export const addPost = (post) => {
  return {
    type: "ADD_POST",
    payload: post,
  };
};

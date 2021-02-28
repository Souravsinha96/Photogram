import { data } from "../database/config";
export const startAddingPost = (post) => {
  return (dispatch) => {
    return data
      .ref("post")
      .update({ [post.id]: post })
      .then(() => {
        dispatch(addPost(post));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const startLoadingPost = () => {
  return (dispatch) => {
    return data
      .ref("post")
      .once("value")
      .then((snapshot) => {
        let posts = [];
        snapshot.forEach((childSnapshot) => {
          posts.push(childSnapshot.val());
        });
        dispatch(loadPost(posts));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
// for removing post alone
// export const startRemovingPost = (id) => {
//   return (dispatch) => {
//     data
//       .ref(`post/${id}`)
//       .remove()
//       .then(() => {
//         dispatch(removePost(id));
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };
//  for removing comments asscoiated to the post, we can use single multi-location update.
export const startRemovingPost = (id) => {
  const updates = {
    [`post/${id}`]: null,
    [`comments/${id}`]: null,
  };
  return (dispatch) => {
    data
      .ref()
      .update(updates)
      .then(() => {
        dispatch(removePost(id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
//remove

export const startAddingComment = (comment, postId) => {
  return (dispatch) => {
    data
      .ref(`comments/${postId}`)
      .push(comment)
      .then(() => {
        dispatch(addComment(comment, postId));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const startLoadingComments = () => {
  return (dispatch) => {
    data
      .ref("comments")
      .once("value")
      .then((snapshot) => {
        let comments = {};
        snapshot.forEach((childSnapshot) => {
          comments[childSnapshot.key] = Object.values(childSnapshot.val());
        });
        dispatch(loadComments(comments));
      });
  };
};

//adding post
export const addPost = (post) => {
  return {
    type: "ADD_POST",
    payload: post,
  };
};
export const loadPost = (post) => {
  return {
    type: "LOAD_POSTS",
    payload: post,
  };
};
export const removePost = (index) => {
  return {
    type: "REMOVE_POST",
    payload: index,
  };
};
export const addComment = (comment, postId) => {
  return {
    type: "ADD_COMMENT",
    payload: comment,
    payload1: postId,
  };
};
export const loadComments = (comments) => {
  return {
    type: "LOAD_COMMENTS",
    payload: comments,
  };
};

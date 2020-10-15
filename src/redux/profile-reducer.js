import { ADD_POST, UPDATE_NEW_POST_TEXT } from "../constans";

let initialState = {
  posts: [
    { id: 1, message: "First post " },
    { id: 2, message: "Second post )" },
  ],
  newPostText: "New post"
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const updateNewPostTextAcionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

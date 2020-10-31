import {
  ADD_POST,
  UPDATE_NEW_POST_TEXT,
  SET_USER_PROFILE,
  SET_STATUS,
  DELETE_POST,
} from "../constans";
import { profileAPI, usersAPI } from "../api/api";

let initialState = {
  profile: null,
  posts: [
    { id: 1, message: "First post " },
    { id: 2, message: "Second post )" },
  ],

  status: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setUserStatus = (status) => ({
  type: SET_STATUS,
  status,
});
export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});

//Use thunk
export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};
export const getStatus = (userId) => (dispatch) => {
  profileAPI
    .getStatus(userId)
    .then((response) => dispatch(setUserStatus(response.data)));
};
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(response.data));
    }
  });
};

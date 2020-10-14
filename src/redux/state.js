// import {
//   ADD_POST,
//   UPDATE_NEW_POST_TEXT,
//   UPDATE_NEW_MESSAGE_BODY,
//   SEND_MESSAGE,
// } from "../constans";

import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";

export let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "First post " },
        { id: 2, message: "Second post )" },
      ],
      newPostText: "New post",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Daniil" },
        { id: 2, name: "Dima" },
      ],
      messages: [
        { id: 1, message: "Hello , boy _ " },
        { id: 2, message: "Hi" },
      ],
      newMessageBody: "",
    },
  },
  _callSubsciber() {
    console.log("State was changed");
  },
  getState() {
    return this._state;
  },

  _addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCounts: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._callSubsciber(this._state);
  },

  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubsciber(this._state);
  },

  subscribe(observer) {
    this._callSubsciber = observer;
  },
  // - - - //

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);

    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubsciber(this._state);
  },
};


window.store = store;
 
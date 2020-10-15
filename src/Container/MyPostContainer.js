import React from "react";
import { MyPosts } from "../components/Profile/MyPosts/MyPosts";
import {
  addPostActionCreator,
  updateNewPostTextAcionCreator,
} from "../redux/profile-reducer";
import { StoreContext } from "../StoreContext";

export const MyPostContainer = (props) => {
  // // let state = props.store.getState();

  // let onAddPost = () => {
  //   props.store.dispatch(addPostActionCreator());
  // };

  // let onPostChange = (text) => {
  //   let action = updateNewPostTextAcionCreator(text);
  //   props.store.dispatch(action);
  // };

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();
        let onAddPost = () => {
          store.dispatch(addPostActionCreator());
        };
        let onPostChange = (text) => {
          let action = updateNewPostTextAcionCreator(text);
          store.dispatch(action);
        };
        return (
          <MyPosts
            updateNewPostText={onPostChange}
            onAddPost={onAddPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

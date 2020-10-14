import React from "react";
import stl from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));
  let newPostElement = React.createRef();

  let onAddPost = (text) => {
    props.addPost(text);
    props.updateNewPostText("");
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={stl.postsBlock}>
      <h3>My Post</h3>
      <div>
        <div>
          <textarea
            cols="30"
            rows="2"
            ref={newPostElement}
            value={props.newPostText}
            onChange={onPostChange}
          ></textarea>
        </div>
        <div>
          <button onClick={onAddPost}> Add post +</button>
        </div>
      </div>
      <div className={stl.posts}>{postsElements}</div>
    </div>
  );
};

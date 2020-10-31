import React from "react";
import stl from "./MyPosts.module.css";
import { Post } from "./Post/Post";
import AddNewPostForm from "./Post/AddNewPostForm";

export const MyPosts = React.memo((props) => {
  console.log("Render");

  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likeCount={p.likeCount} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={stl.postsBlock}>
      <h3>My Post</h3>
      <AddNewPostForm onSubmit={onAddPost} />
      <div className={stl.posts}>{postsElements}</div>
    </div>
  );
});

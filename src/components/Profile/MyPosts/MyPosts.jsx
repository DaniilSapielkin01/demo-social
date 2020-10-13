import React from "react";
import stl from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = () => {
  return (
    <div>
      my Post
      <div>
        <textarea cols="30" rows="2"></textarea>
        <button> Add post +</button>
      </div>
      <div className={stl.posts}>
        <Post />
      </div>
    </div>
  );
};

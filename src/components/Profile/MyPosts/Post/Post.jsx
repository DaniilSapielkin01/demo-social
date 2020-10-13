import React from "react";
import stl from "./Post.module.css";

export const Post = () => {
  return (
    <div className={stl.item}>
      <img
        src="https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg"
        alt="img"
      />
      post #1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { state, addPost, updateNewPostText, subscribe } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree();

subscribe(rerenderEntireTree);

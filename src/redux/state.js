let rerenderEntireTree = () => {
  
};
export let state = {
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
  },
};

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.newPostText,
    likesCounts: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};
export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};
export const subscribe = (observer) => {
  rerenderEntireTree(observer);
};

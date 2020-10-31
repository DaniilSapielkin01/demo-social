import {
  addPostActionCreator,
  profileReducer,
  deletePost,
} from "../redux/profile-reducer";
let state = {
  posts: [
    { id: 1, message: "First post " },
    { id: 2, message: "Second post )" },
    { id: 3, message: "Three post )" },
  ],
};

it("length of posts should be incremented", () => {
  //1. start test data
  let action = addPostActionCreator("it-kamaz");
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expection
  expect(newState.posts.length).toBe(4);
});

it("message of new post should be correct", () => {
  // 1. test data
  let action = addPostActionCreator("it-kamaz");
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts[3].message).toBe("it-kamaz");
});

it("after deleting length of messages should be decrement", () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(2);
});

it("after deleting length shouldn't  be decrement if id is incorrect", () => {
  let action = deletePost(1000);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});

// web site JEST.io for testing

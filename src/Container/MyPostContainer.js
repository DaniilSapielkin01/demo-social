import { connect } from "react-redux";
import { MyPosts } from "../components/Profile/MyPosts/MyPosts";
import {
  addPostActionCreator,
  updateNewPostTextAcionCreator,
} from "../redux/profile-reducer";

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
  onAddPost: () => {
    dispatch(addPostActionCreator());
  },
  updateNewPostText: (text) => {
    let action = updateNewPostTextAcionCreator(text);
    dispatch(action);
  },
});
export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

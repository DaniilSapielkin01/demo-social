import { connect } from "react-redux";
import { addPostActionCreator } from "../redux/profile-reducer";
import { MyPosts } from "../components/Profile/MyPosts/MyPosts";

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (newPostText) => {
    dispatch(addPostActionCreator(newPostText));
  },
});
export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

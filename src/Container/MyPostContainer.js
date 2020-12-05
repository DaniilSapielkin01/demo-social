import { connect } from "react-redux";
import { addPostActionCreator, deletePost } from "../redux/profile-reducer";
import { MyPosts } from "../components/Profile/MyPosts/MyPosts";

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (newPostText) => {
    dispatch(addPostActionCreator(newPostText));
  },
  onDeletePost: (id) => {
    dispatch(deletePost(id));
  },
});
export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
  deletePost,
} from "../redux/profile-reducer";
import { Profile } from "../components/Profile/Profile";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  refrechProfile() {
    //let userId взяот из парам-ров в withRouter
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    //Use Thunk
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  componentDidMount() {
    this.refrechProfile();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId !== prevProps.match.params.userId)
      this.refrechProfile();
  }

  render() {
    // if (!props.isAuth) return <Redirect to="/login" />;
    return (
      <div>
        <Profile
          {...this.props}
          isOwner={!this.props.match.params.userId}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
          savePhoto={this.props.savePhoto}
          saveProfile={this.props.saveProfile}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.iAuth,
});
const mapDispatchToProps = {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
  deletePost,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
  // WithAuthRedirect
)(ProfileContainer);

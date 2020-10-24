import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  getUserProfile,
  getStatus,
  updateStatus,
} from "../redux/profile-reducer";
import { Profile } from "../components/Profile/Profile";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    //let userId взято из парам-ров в withRouter
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 5713;
    }
    //Use Thunk
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    // if (!props.isAuth) return <Redirect to="/login" />;
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});
const mapDispatchToProps = {
  getUserProfile,
  getStatus,
  updateStatus,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
  // WithAuthRedirect
)(ProfileContainer);

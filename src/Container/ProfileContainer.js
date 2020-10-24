import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import { withRouter } from "react-router-dom";

import { getUserProfile } from "../redux/profile-reducer";
import { Profile } from "../components/Profile/Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    //let userId взято из парам-ров в withRouter
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 1;
    }
    //Use Thunk
    this.props.getUserProfile(userId);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Profile {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});
const mapDispatchToProps = { getUserProfile };

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithUrlDataContainerComponent);

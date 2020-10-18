import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";

import { setUserProfile } from "../redux/profile-reducer";
import { Profile } from "../components/Profile/Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      // .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <div>
        <Profile {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  setUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

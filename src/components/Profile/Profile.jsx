import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "../../Container/MyPostContainer";

export const Profile = (props) => {
  console.log("Profile", props);
  console.log(props);
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};

// profile={this.profile}
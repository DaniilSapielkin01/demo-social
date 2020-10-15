import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostContainer } from "../../Container/MyPostContainer";

export const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostContainer />
    </div>
  );
};

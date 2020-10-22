import React from "react";
import stl from "./Users.module.css";
import userPhoto from "../../assets/images/userPhoto.jpg";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

export const Users = (props) => {
  const { totalUsersCount, pageSize } = props;

  let pages = [];
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((pg) => (
          <span
            className={props.currentPage === pg ? stl.selectedPage : ""}
            onClick={() => props.onPageChanged(pg)}
          >
            {pg}
          </span>
        ))}
      </div>
      <button onClick={props.getUsers}>Получить пользователей</button>
      {props.users.map((us) => (
        <div>
          <span>
            <div>
              <NavLink to={`/profile/${us.id}`}>
                <img
                  className={stl.userPhoto}
                  src={us.photoUrl ? us.photoUrl : userPhoto}
                  alt="img"
                />
              </NavLink>
            </div>
            <div>
              {us.followed ? (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === us.id
                  )}
                  onClick={() => {
                    props.toggleIsFollowingProgress(true, us.id);
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${us.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "e0688eb2-71da-40be-8070-2eff5afe656b",
                          },
                        }
                      )
                      .then((response) => {
                        if (props.follow(response.data.resultCode !== 0)) {
                          props.unFollow(us.id);
                        }
                        props.toggleIsFollowingProgress(false, us.id);
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === us.id
                  )}
                  onClick={() => {
                    props.toggleIsFollowingProgress(true, us.id);
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${us.id}`,
                        {},
                        {
                          withCredentials: true,
                        }
                      )
                      .then((response) => {
                        if (props.follow(response.data.resultCode == 0)) {
                          props.follow(us.id);
                        }
                        props.toggleIsFollowingProgress(false, us.id);
                      });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{us.name}</div>
              <div>{us.status}</div>
            </span>
            <span>{/* <div>{us.location.city}</div> */}</span>
          </span>
        </div>
      ))}
    </div>
  );
};

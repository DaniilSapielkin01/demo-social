import React from "react";
import stl from "./Users.module.css";
import userPhoto from "../../assets/images/userPhoto.jpg";
import { NavLink } from "react-router-dom";
import { Paginator } from "../common/Paginator/Paginator";

export const Users = (props) => {
  const { totalUsersCount, pageSize, currentPage, onPageChanged } = props;

  let pages = [];
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />

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
                    props.unfollow(us.id);
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
                    props.follow(us.id);
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

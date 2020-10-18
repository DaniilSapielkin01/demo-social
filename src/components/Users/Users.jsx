import React from "react";
import stl from "./Users.module.css";
import userPhoto from "../../assets/images/userPhoto.jpg";
import { NavLink } from "react-router-dom";

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
                <button onClick={() => props.unFollow(us.id)}>Unfollow</button>
              ) : (
                <button onClick={() => props.follow(us.id)}>Follow</button>
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

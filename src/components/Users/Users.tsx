import React, { FC } from "react";
import { Paginator } from "../common/FormsControls/Paginator/Paginator";
import { UserType } from "../../types/types";
import { User } from "./User";

type PropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  portionSize?: number;
  users: Array<UserType>;
  followingInProgress: Array<number>;
  unfollow: () => void;
  follow: () => void;
};

export const Users: FC<PropsType> = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  users,
  ...props
}) => {
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
      <div>
        {users.map((u) => (
          <User
            user={u}
            followingInProgress={props.followingInProgress}
            key={u.id}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        ))}
      </div>
    </div>
  );
};

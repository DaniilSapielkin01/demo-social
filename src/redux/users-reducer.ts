import {
  SET_CURRENT_PAGE,
  FOLLOW,
  UNFOLLOW,
  SET_USERS,
  SET_TOTAL_USERS_COUNT,
  TOGGLE_IS_FETCHING,
  TOGGLE_IS_FOLLOWING_PROGRESS,
} from "../constans";
import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/objects-halpers";
import { UserType } from "../types/types";

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 2,
  isFetching: false,
  followingInProgress: [] as Array<number>, //array of users ids
  fake: 10,
};

type InitialStateType = typeof initialState;

export const usersReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.id, "id", {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.id, "id", {
          followed: false,
        }),
        // users: state.users.map((us) => {
        //   if (us.id === action.userId) {
        //     return { ...us, followed: false };
        //   }
        //   return us;
        // }),
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

// ===
type FollowSuccessType = {
  type: typeof FOLLOW;
  userId: number;
};
export const followSuccess = (userId: number): FollowSuccessType => ({
  type: FOLLOW,
  userId,
});
// ===
type UnfollowSuccessType = {
  type: typeof UNFOLLOW;
  userId: number;
};
export const unfollowSuccess = (userId: number): UnfollowSuccessType => ({
  type: UNFOLLOW,
  userId,
});
// ===
type SetUsersType = {
  type: typeof SET_USERS;
  users: Array<UserType>;
};
export const setUsers = (users: Array<UserType>): SetUsersType => ({
  type: SET_USERS,
  users,
});
// ===
type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE;
  currentPage: number;
};
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
// ===
type SetTotalUsersCountType = {
  type: typeof SET_TOTAL_USERS_COUNT;
  totalCount: number;
};
export const setTotalUsersCount = (
  totalCount: number
): SetTotalUsersCountType => ({
  type: SET_TOTAL_USERS_COUNT,
  totalCount,
});
// ===
type ToggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
};
export const toggleIsFetching = (
  isFetching: boolean
): ToggleIsFetchingType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
// ===
type ToggleIsFollowingProgressType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS;
  isFetching: boolean;
  userId: number;
};
export const toggleIsFollowingProgress = (
  isFetching: boolean,
  userId: number
): ToggleIsFollowingProgressType => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const requestUsers = (page: number, pageSize: number) => {
  return async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    let data = await usersAPI
      .getUsers(page, pageSize)
      .dispatch(toggleIsFetching(false));

    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};
// ---- refactoring function for follow vs unfollow
const followUnfolloweFlow = async (
  dispatch: any,
  userId: number,
  apiMethod: any,
  actionCreator: any
) => {
  dispatch(toggleIsFollowingProgress(true, userId));

  let response = await apiMethod(userId);
  if (response.data.resultCode == 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleIsFollowingProgress(false, userId));
};

export const follow = (userId: number) => {
  return async (dispatch: any) => {
    followUnfolloweFlow(
      dispatch,
      userId,
      usersAPI.follow.bind(usersAPI),
      followSuccess
    );
  };
};
export const unfollow = (userId: number) => {
  return async (dispatch: any) => {
    followUnfolloweFlow(
      dispatch,
      userId,
      usersAPI.unfollow.bind(usersAPI),
      unfollowSuccess
    );
  };
};

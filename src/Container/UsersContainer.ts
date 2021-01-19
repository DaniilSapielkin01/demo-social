import React from "react";
import {connect} from "react-redux";

import {Users} from "../components/Users/Users";
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleIsFollowingProgress,
    requestUsers,
} from "../redux/users-reducer";
import {Preloader} from "../components/common/Preloader/Preloader";
// import { usersAPI } from "../api/api";
import {compose} from "redux";
// import { WithAuthRedirect } from "../hoc/WithAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
} from "../redux/users-selectors";
import {UserType} from "../types/types";

type PropsType = {
    currentPage: number;
    pageSize: number;
    isFetching: boolean;
    totalUsersCount: number;
    users: Array<UserType>;
    getUsers: (currentPage: number, pageSize: number) => void;
    followingInProgress: Array<number>;
    unfollow: () => void;
    follow: () => void;
};

// type MapStatePropsType = {
//   currentPage: number;
//   pageSize: number;
//   isFetching: boolean;
//   totalUsersCount: number;
//   users: Array<UserType>;
//   followingInProgress: Array<number>;
// };

// type MapDispatchPropsType = {
//   getUsers: (currentPage: number, pageSize: number) => void;
//   unfollow: (userId: number) => void;
//   follow: (userId: number) => void;
// };

// type OwnPropsType = {
//   pageTitle: string;
// };

// type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
    };

    render() {
        return (
            <div>
                // <h2>{this.props.pageTitle}</h2>
                hello

            </div>
        );
    }
}

// const mapStateToProps = (state) => ({
//   users: state.usersPage.users,
//   pageSize: state.usersPage.pageSize,
//   totalUsersCount: state.usersPage.totalUsersCount,
//   currentPage: state.usersPage.currentPage,
//   isFetching: state.usersPage.isFetching,
//   followingInProgress: state.usersPage.followingInProgress,
// });
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
});

const mapDispatchToProps = {
    follow,
    unfollow,
    getUsers: requestUsers,

    //Это создает connect
    // setIsFetching: (isFetching) => {
    // dispatch(toggleIsFetchingAC(isFetching));
    // },
};

export default compose(
    // WithAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer);

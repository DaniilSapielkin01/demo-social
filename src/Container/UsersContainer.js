import React from "react";
import { connect } from "react-redux";

import { Users } from "../components/Users/Users";
import {
  setUsers,
  follow,
  unFollow,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleIsFollowingProgress,
} from "../redux/users-reducer";
import { Preloader } from "../components/common/Preloader/Preloader";
import { usersAPI } from "../api/api";

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(false);

    usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    const {
      isFetching,
      totalUsersCount,
      pageSize,
      currentPage,
      users,
      follow,
      unFollow,
      toggleIsFollowingProgress,
      followingInProgress,
    } = this.props;

    return (
      <>
        <div>
          {isFetching ? (
            <Preloader />
          ) : (
            <Users
              totalUsersCount={totalUsersCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChanged={this.onPageChanged}
              users={users}
              follow={follow}
              unFollow={unFollow}
              toggleIsFollowingProgress={toggleIsFollowingProgress}
              followingInProgress={followingInProgress}
            />
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  followingInProgress: state.usersPage.followingInProgress,
});

const mapDispatchToProps = {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleIsFollowingProgress,

  //Это создает connect
  // setIsFetching: (isFetching) => {
  // dispatch(toggleIsFetchingAC(isFetching));
  // },
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

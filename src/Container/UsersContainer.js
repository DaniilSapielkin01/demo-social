import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";

import { Users } from "../components/Users/Users";
import {
  setUsers,
  follow,
  unFollow,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
} from "../redux/users-reducer";
import preloader from "../assets/images/preloader.gif";
import { Preloader } from "../components/common/Preloader/Preloader";

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      // .get(
      //   `https://social-network.samuraijs.com/api/1.0/users?pages=${this.props.currentPage}&count=${this.props.pageSize}`
      // )
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(false);
    axios
      // .get(
      //   `https://social-network.samuraijs.com/api/1.0/users?pages=${pageNumber}&count=${this.props.pageSize}`
      // )
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data);
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
});

const mapDispatchToProps = {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,

  // setIsFetching: (isFetching) => {
  // dispatch(toggleIsFetchingAC(isFetching));
  // },
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

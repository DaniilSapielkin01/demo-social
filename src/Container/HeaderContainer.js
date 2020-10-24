import React from "react";
import { connect } from "react-redux";
import { getAuthUserData } from "../redux/auth-reducer";
import { Header } from "../components/Header/Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    //Use Thunk
    this.props.getAuthUserData();
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
const mapDispatchToProps = {
  getAuthUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

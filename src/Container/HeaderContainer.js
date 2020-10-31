import React from "react";
import { connect } from "react-redux";
import { logout } from "../redux/auth-reducer";
import { Header } from "../components/Header/Header";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

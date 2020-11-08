import React from "react";
import {  Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import UsersContainer from "./Container/UsersContainer";
import HeaderContainer from "./Container/HeaderContainer";
import Login from "./components/Login/Login";
import { initializeApp } from "./redux/app-reducer";
import { Preloader } from "./components/common/Preloader/Preloader";
import { WithSuspense } from "./hoc/withSuspense";
// import DialogsContainer from "./Container/DialogsContainer";
// import ProfileContainer from "./Container/ProfileContainer";

const DialogsContainer = React.lazy(() =>
  import("./Container/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./Container/ProfileContainer")
);

class App extends React.Component {
  componentDidMount() {
    //Use Thunk
    this.props.initializeApp();
  }

  render() {
    // debugger;
    if (!this.props.initialized) {
      return <Preloader />;
    } else {
      return (
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Route
              exact
              path="/dialogs"
              render={() => (
                <React.Suspense fallback={<Preloader />}>
                  <DialogsContainer />
                </React.Suspense>
              )}
            />
            <Route
              path="/profile/:userId?"
              render={WithSuspense(ProfileContainer)}
            />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <Login />} />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
const mapDispatchToProps = {
  initializeApp,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);

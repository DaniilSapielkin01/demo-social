import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";

import { DialogsContainer } from "./Container/DialogsContainer";

import UsersContainer from "./Container/UsersContainer";
import ProfileContainer from "./Container/ProfileContainer";
import HeaderContainer from "./Container/HeaderContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Route exact path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
      </div>
    </div>
  );
}

export default App;

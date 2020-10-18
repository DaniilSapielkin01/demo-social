import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";

import { DialogsContainer } from "./Container/DialogsContainer";
import UsersContainer from "./Container/UsersContainer";
import ProfileContainer from "./Container/ProfileContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route exact path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile" render={() => <ProfileContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
      </div>
    </div>
  );
}

export default App;

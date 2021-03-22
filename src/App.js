import React from "react";
import {Route} from "react-router-dom";

import "./App.css";
import {Navbar} from "./components/Navbar/Navbar";

import {DialogsContainer} from "./Container/DialogsContainer";

import UsersContainer from "./Container/UsersContainer";
import ProfileContainer from "./Container/ProfileContainer";
import HeaderContainer from "./Container/HeaderContainer";
import {Redirect} from "react-router";
import NewsContainer from "./Container/NewsContainer";
import {FormLogin} from "./components/Form/FormLogin";

function App(props) {
  return (
    <div className="app-wrapper">
      <HeaderContainer/>
      <Navbar/>
      <div className="app-wrapper-content">
        <Route path="/" component={() => <Redirect to='/news'/>}/>
        {/*<Route exact path="/news" component={() => <NewsContainer/>}/>*/}
        {/*<Route exact path="/dialogs" render={() => <DialogsContainer/>}/>*/}
        <Route path="/profile/:userId?" exact render={() => <ProfileContainer/>}/>
        <Route path="/users" render={() => <UsersContainer/>}/>
        {/*<Route path="/login" render={() => <FormLogin/>}/>*/}
      </div>
    </div>
  );
}

export default App;

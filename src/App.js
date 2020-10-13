import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components//Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route exact path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

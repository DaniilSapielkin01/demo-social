import React from "react";
import { NavLink } from "react-router-dom";
import stl from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={stl.nav}>
      <div className={stl.item}>
        <NavLink to="/profile" activeClassName={stl.active}>
          Profile
        </NavLink>
      </div>
      <div className={stl.item}>
        <NavLink to="/dialogs" activeClassName={stl.active}>
          Messages
        </NavLink>
      </div>
      <div className={stl.item}>
        <NavLink to="/news" activeClassName={stl.active}>
          News
        </NavLink>
      </div>
      <div className={stl.item}>
        <NavLink to="music" activeClassName={stl.active}>
          Music{" "}
        </NavLink>
      </div>
    </nav>
  );
};

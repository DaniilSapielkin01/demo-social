import React from "react";
import { NavLink } from "react-router-dom";
import stl from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/Dialogtem";

export const Dialogs = (props) => {
  return (
    <div className={stl.dialogs}>
      <div className={stl.dialogsItem}>
        <DialogItem />
        <div className={`${stl.dialog}+" " + ${stl.active} `}>
          <NavLink to="/dialogs/2">Valeriya</NavLink>
        </div>
        <div className={stl.dialog}>
          <NavLink to="/dialogs/3">Nastya</NavLink>
        </div>
      </div>
      <div className={stl.messages}>
        <div className={stl.message}>Hi</div>
        <div className={stl.message}>Hello </div>
      </div>
    </div>
  );
};

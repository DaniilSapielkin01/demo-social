import React from "react";

import stl from "../../Dialogs/Dialogs.module.css";

export const Message = (props) => {
  return <div className={stl.dialog}>{props.message}</div>;
};

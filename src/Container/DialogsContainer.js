import React from "react";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import { compose } from "redux";

import { sendMessageCreator } from "../redux/dialogs-reducer";
import Dialogs from "../components/Dialogs/Dialogs";
import { WithAuthRedirect } from "../hoc/WithAuthRedirect";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs);

// WithAuthRedirect  - Если нет стоит auth(в compose) и мы залогинены,  то переход происходит на profilePaga, если же мы не залогинены то все работает правильно (при условии что мы используем WithAuthRedirect в compose )

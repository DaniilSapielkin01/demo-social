import { connect } from "react-redux";
import { compose } from "redux";
import { Dialogs } from "../components/Dialogs/Dialogs";
import { WithAuthRedirect } from "../hoc/WithAuthRedirect";
import {
  sendMessageCreator,
} from "../redux/dialogs-reducer";

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = (dispatch) => ({

  sendMessage: (newMessageBody) => {
    dispatch(sendMessageCreator(newMessageBody));
  },
});

export const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  // WithAuthRedirect
)(Dialogs);

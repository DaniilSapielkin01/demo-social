import { connect } from "react-redux";
import { compose } from "redux";
import { Dialogs } from "../components/Dialogs/Dialogs";
import { WithAuthRedirect } from "../hoc/WithAuthRedirect";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../redux/dialogs-reducer";

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
  isAuth: state.isAuth.isAuth,
});

const mapDispatchToProps = (dispatch) => ({
  updateNewMessageBody: (body) => {
    dispatch(updateNewMessageBodyCreator(body));
  },
  sendMessage: () => {
    dispatch(sendMessageCreator());
  },
});



export const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Dialogs);

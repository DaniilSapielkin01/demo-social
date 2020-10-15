import { connect } from "react-redux";
import { Dialogs } from "../components/Dialogs/Dialogs";


const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage,
});

const mapDispatchToProps = (dispatch) => ({
  updateNewMessageBody: (body) => {
    dispatch(updateNewMessageBodyCreator(body));
  },
  sendMessage: () => {
    dispatch(sendMessageCreator());
  },
});

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

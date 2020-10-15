import React from "react";
import { Dialogs } from "../components/Dialogs/Dialogs";
import { StoreContext } from "../StoreContext";

export const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;
  let onSendMessageClick = () => {
    props.state.dispatch(sendMessageCreator());
  };
  //для изминения textarea
  let onNewMessageChange = (body) => {
    props.state.dispatch(updateNewMessageBodyCreator(e.target.value));
  };

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;

        let onSendMessageClick = () => {
          state.dispatch(sendMessageCreator());
        };
        let onNewMessageChange = (body) => {
          state.dispatch(updateNewMessageBodyCreator(e.target.value));
        };
        return (
          <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

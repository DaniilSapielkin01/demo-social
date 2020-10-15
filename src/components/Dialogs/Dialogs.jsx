import React from "react";
import stl from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/Dialogtem";
import { Message } from "./Message/Message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";

export const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  //для изминения textarea
  let newMessageBody = state.newMessageBody;
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={stl.dialogs}>
      <div className={stl.dialogsItem}>{dialogsElements}</div>
      <div className={stl.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Enter your message"
              cols="30"
              rows="3"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

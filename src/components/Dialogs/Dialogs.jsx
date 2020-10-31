import React from "react";
import { Redirect } from "react-router";
import stl from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/Dialogtem";
import { Message } from "./Message/Message";
import AddMessageForm from "./AddMessagesForm/AddMessagesForm";

export const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to="/login" />;

  return (
    <div className={stl.dialogs}>
      <div className={stl.dialogsItem}>{dialogsElements}</div>
      <div className={stl.messages}>
        <div>{messagesElements}</div>
        <AddMessageForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

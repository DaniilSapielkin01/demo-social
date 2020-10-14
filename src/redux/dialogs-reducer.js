import { SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY } from "../constans";
let initialState = {
  dialogs: [
    { id: 1, name: "Daniil" },
    { id: 2, name: "Dima" },
    { id: 3, name: "Vladilen" },
  ],
  messages: [
    { id: 1, message: "Hello , boy _ " },
    { id: 2, message: "Hi" },
  ],
  newMessageBody: "",
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 6, message: body });
      return state;

    default:
      return state;
  }
};

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

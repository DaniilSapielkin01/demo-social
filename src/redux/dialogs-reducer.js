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
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

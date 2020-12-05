import { SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY } from "../constans";

type InitialStateType = {};

type DialogType = {
  id: number;
  name: string;
};
type MessageType = {
  id: number;
  message: string;
};

let initialState: InitialStateType = {
  dialogs: [
    { id: 1, name: "Daniil" },
    { id: 2, name: "Dima" },
    { id: 3, name: "Vladilen" },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: "Hello , boy _ " },
    { id: 2, message: "Hi" },
  ] as Array<MessageType>,
};

export type initialStateType = typeof initialState;

export const dialogsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        // messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};

type sendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE;
  newMessageBody: string;
};

export const sendMessageCreator = (
  newMessageBody: string
): sendMessageCreatorActionType => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

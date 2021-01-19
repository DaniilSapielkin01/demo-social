import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { usersReducer } from "./users-reducer";
import { authReducer } from "./auth-reducer";
import { appReducer } from "./app-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;
 
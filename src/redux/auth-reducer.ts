import { stopSubmit } from "redux-form";

import { SET_USER_DATA, GET_CAPTCHA_URL_SUCCESS } from "../constans";
import { authAPI, securityAPI } from "../api/api";

// export type InitialStateType = {
//   userId: number | null;
//   email: string | null;
//   login: string | null;
//   isAuth: boolean;
//   captchaUrl: string | null;
// };

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
};

export type InitialStateType = typeof initialState;

// Возвращает state такого же типа как и принимает
export const authReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      //одна логика и по этому так
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

type SetAuthUserDataATPayload = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};
type SetAuthUserDataAT = {
  type: typeof SET_USER_DATA;
  payload: SetAuthUserDataATPayload;
};

const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetAuthUserDataAT => ({
  type: SET_USER_DATA,
  payload: {
    userId,
    email,
    login,
    isAuth,
  },
});

type GetCaptchaUrlSuccessAT = {
  type: typeof GET_CAPTCHA_URL_SUCCESS;
  payload: { captchaUrl: string };
};

const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessAT => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

//Use Thunk
export const getAuthUserData = () => async (dispatch: any) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};

export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captchaUrl: string
) => async (dispatch: any) => {
  let response = await authAPI.login(email, password, rememberMe, captchaUrl);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

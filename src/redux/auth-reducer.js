import { SET_USER_DATA, GET_CAPTCHA_URL_SUCCESS } from "../constans";
import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

export const authReducer = (state = initialState, action) => {
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

const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: {
    userId,
    email,
    login,
    isAuth,
  },
});
const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});
//Use Thunk
export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};

export const login = (email, password, rememberMe,captchaUrl) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe,captchaUrl);
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
export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

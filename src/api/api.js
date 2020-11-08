import * as axios from "axios";
import { Form } from "redux-form";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "9f51da93-6f59-45e6-928a-c572a19b7a11",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize} `)
      .then((response) => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  getProfile(userId) {
    console.warn("Obsolete method. Please profileAPI object");

    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, {
      status,
    });
  },
  savePhoto(photoFile) {
    let formData = new FormData();
    formData.append("image", photoFile);

    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};

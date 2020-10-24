import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "a18d807a-2423-4c95-88fc-34966c4ff0ed",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    debugger;
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
    return instance.get(`profile/${userId}`)    
  },
};
export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
};

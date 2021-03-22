import * as axios from "axios";
import {setNews} from "../redux/news-reducer";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "e0688eb2-71da-40be-8070-2eff5afe656b",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    axios
      .get(`users/${currentPage}&count=${pageSize} `, {
        withCredentials: true,
      })
      .then((response) => response.data);
  },
};

export const getNewsPost = (userId = 1) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${userId}`)
    .then(resp => {
      setNews(resp.data)
    })
    .catch(error => console.log(error))
}

export const getUsers2 = (currentPage = 1, pageSize = 1) => {
  instance
    .get(`follow?page=${currentPage}&count=${pageSize}`)
    .then((response) => response.data);
};

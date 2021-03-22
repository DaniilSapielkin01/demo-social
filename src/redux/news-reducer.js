import {SET_NEWS} from "../constans";

const initialState = {
  news: []
}

export const NewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS :
      console.log(action)
      return {
        ...state,
        news: action.payload
      }

    default:
      return state
  }

}


export const setNews = (payload) => ({
  type: SET_NEWS,
  payload
})
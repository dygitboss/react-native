import { GET_BEERS } from "./constants";
import { success, error } from "@redux-requests/core";

const initialState = {
  beers: [],
  currentPage: 1,
  numberOfPages: 1,
  totalResults: 0,
  loading: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BEERS:
      return { ...state, error: null, loading: true };

    case success(GET_BEERS):
      return {
        ...state,
        beers: action.response.data.data,
        loading: false,
      };

    case error(GET_BEERS):
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default reducer;

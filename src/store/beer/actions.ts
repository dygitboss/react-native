import { GET_BEERS } from "./constants";

export const getBeers = () => ({
  type: GET_BEERS,
  request: {
    url: "/beers",
  },
});

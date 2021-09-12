import { atom, selector } from "node_modules/recoil";
import { http } from "utilities/http";

export const quoteState = atom({
  key: "quoteState",
  default: [],
});

export const getDataFromAPI = async () => (
  await http(
    // set to 8 so API will sometimes return nothing
    `http://localhost:3000/api?id=${1 + Math.floor(Math.random() * 8)}`
  )
);

export const quoteQuery = selector({
  key: 'Quote',
  get: async () => getDataFromAPI(),
  cachePolicy_UNSTABLE: {
    eviction: 'most-recent'
  }
});
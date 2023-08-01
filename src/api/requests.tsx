import axios from "axios";
import { API_URL } from "./API_URL";

export const getCharacters = ({ pageParam = 1 }) => {
  const charactersData = axios
    .get(API_URL.BASE_URL(pageParam))
    .then((resp) => resp.data);
  return charactersData;
};

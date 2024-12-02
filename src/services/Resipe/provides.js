//Resipe/provides.js
import axios from "axios";
import { URL_BY_NAME } from "@/consts";

export const getByName = async (name) => {
  return await axios.get(`${URL_BY_NAME}${name}`);
};

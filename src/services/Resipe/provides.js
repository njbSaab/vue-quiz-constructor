//Resipe/provides.js
import axios from "axios";
import { URL_BY_NAME } from "@/consts";
import { URL_BY_ID } from "@/consts";

export const getById = async (id) => {
  return await axios.get(`${URL_BY_ID}${id}`);
};

export const getByName = async (name) => {
  return await axios.get(`${URL_BY_NAME}${name}`);
};

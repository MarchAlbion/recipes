import axios from "axios";
import { RECIPES_API } from "./recipes-api";

export const getByName = async (name: string) => {
  const { data } = await axios.get(`${RECIPES_API}search.php?s=${name}`);
  return data.meals || [];
};

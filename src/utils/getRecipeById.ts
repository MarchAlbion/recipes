import axios from "axios";
import { RECIPES_API } from "./recipes-api";

export const getRecipeById = async (id: string) => {
  const { data } = await axios.get(
    `${RECIPES_API}lookup.php?i=${id}`
  );
  return data.meals[0];
};

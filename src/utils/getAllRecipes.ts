import axios from "axios";
import { RECIPES_API } from "./recipes-api";
import { Recipe } from "../types/types";

export const getAllRecipes = async (): Promise<Recipe[]> => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const allRecipes: Recipe[] = [];

  for (const letter of alphabet) {
    try {
      const response = await axios.get(`${RECIPES_API}search.php?f=${letter}`);
      if (response.data.meals) {
        allRecipes.push(...response.data.meals);
      }
    } catch (error) {
      console.error(`ERROR: ${error}`);
    }
  }
  return allRecipes;
};

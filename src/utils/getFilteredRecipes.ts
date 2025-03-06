import { Category, Recipe } from "../types/types";

export const getFilteredRecipes = (
  selected: Category | undefined,
  allRecipes: Recipe[] | undefined
) => {
  if (!allRecipes) return [];

  if (selected?.idCategory === "all") {
    return allRecipes;
  }

  const filteredRecipes = allRecipes.filter(
    (recipe: Recipe) => recipe.strCategory === selected?.strCategory
  );

  return filteredRecipes;
};

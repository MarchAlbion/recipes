import { RECIPES_API } from "./recipes-api";

export const getCategory = async () => {
  const response = await fetch(`${RECIPES_API}/categories.php`);
  const data = await response.json();
  return data.categories;
};

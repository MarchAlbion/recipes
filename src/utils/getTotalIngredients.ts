import { Recipe } from "../types/types";

export const getTotal = (favourites: Recipe[]) => {
  const totalIng: string[] = [];

  favourites.forEach((el: any) => {
    for (let i = 1; i <= 20; i++) {
      const ingredient = el[`strIngredient${i}`];

      if (ingredient) {
        totalIng.push(ingredient);
      }
    }
  });

  return Array.from(new Set(totalIng));
};

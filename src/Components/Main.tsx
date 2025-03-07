import { useState } from "react";
import { Category, Recipe } from "../types/types";
import { Pagination } from "./Pagination";
import { RecipesList } from "./RecipesList";

type Props = {
  recipes: Recipe[] | undefined;
  filter: Category;
};

export const Main = ({ recipes }: Props) => {
  const [page, setPage] = useState(1);

  const indexOfLastRecipe = page * 9;
  const indexOfFirstRecipe = indexOfLastRecipe - 9;

  const currentRecipes = recipes?.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const onPageChange = (page: number) => {
    setPage(page);
  };
  return (
    <main className="bg-white w-full flex flex-1 flex-col">
      <RecipesList recipes={currentRecipes} />
      <Pagination
        totalRecipes={recipes?.length}
        recipesPerPage={9}
        onPageChange={onPageChange}
        recipes={recipes}
      />
    </main>
  );
};

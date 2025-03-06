import { Recipe } from "../types/types";
import { SingleRecipe } from "./SingleRecipe";

type Props = {
  recipes: Recipe[] | undefined;
};

export const RecipesList = ({ recipes }: Props) => {
  return (
    <div className="bg-white p-8 flex-1 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          {recipes?.map((recipe) => {
            return <SingleRecipe key={recipe.idMeal} recipe={recipe} />;
          })}
        </div>
      </div>
    </div>
  );
};

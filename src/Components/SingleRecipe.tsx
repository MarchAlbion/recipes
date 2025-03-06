import { Link } from "react-router";
import { Recipe } from "../types/types";

type Props = {
  recipe: Recipe | undefined;
};

export const SingleRecipe = ({ recipe }: Props) => {
  return (
    <Link to={`recipe/${recipe?.idMeal}`} className="bg-gray-200 flex flex-col">
      <div>
        <div className="p-1 text-sm truncate text-orange-600">
          {recipe?.strMeal}
        </div>
        <div className="flex flex-row justify-between">
          <div className="p-2 text-sm truncate text-green-700">
            {recipe?.strArea}
          </div>
          <div className="p-1 text-sm truncate text-green-700">
            {recipe?.strCategory}
          </div>
        </div>
      </div>

      <img
        alt="Meal"
        src={recipe?.strMealThumb}
        width={158}
        height={100}
        className="max-h-28 w-full object-cover"
      />
    </Link>
  );
};

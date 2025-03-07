import { Link } from "react-router";
import { Recipe } from "../types/types";
import { motion } from "framer-motion";

type Props = {
  recipe: Recipe | undefined;
};

export const SingleRecipe = ({ recipe }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "easeInOut",
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <Link
        to={`recipe/${recipe?.idMeal}`}
        className="bg-gray-800 flex flex-col overflow-hidden group hover:bg-gray-600 transition-colors duration-300"
      >
        <div>
          <div className="p-1 text-sm truncate text-white font-bold">
            {recipe?.strMeal}
          </div>
          <div className="flex flex-row justify-between">
            <div className="p-1 text-sm truncate text-gray-500">
              {recipe?.strArea}
            </div>
            <div className="p-1 text-sm truncate text-gray-500">
              {recipe?.strCategory}
            </div>
          </div>
        </div>

        <img
          alt="Meal"
          src={recipe?.strMealThumb}
          width={158}
          height={100}
          className="max-h-28 w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </Link>
    </motion.div>
  );
};

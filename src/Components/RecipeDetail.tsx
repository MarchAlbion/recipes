import { Link, useParams } from "react-router";
import { useRecipeById } from "../utils/hooks/useRecipeById";
import { motion } from "framer-motion";
import { Recipe } from "../types/types";

type Props = {
  handleFavourite: (recipe: Recipe) => void;
  favourite: Recipe[];
};

export const RecipeDetail = ({ handleFavourite, favourite }: Props) => {
  const { id } = useParams();
  const { data: recipe, isLoading } = useRecipeById(id as string);

  const isFavourite = favourite.some((fav) => fav.idMeal === recipe?.idMeal);

  console.log(favourite);
  const extractIngredients = (recipe: any) => {
    if (!isLoading) {
      const ingredients = Object.entries(recipe)
        .filter(([key, value]) => key.startsWith("strIngredient") && value)
        .map(([_, value]) => value);

      return ingredients;
    }
  };

  const measures = (recipe: any) => {
    if (!isLoading) {
      const measures = Object.entries(recipe)
        .filter(([key, value]) => key.startsWith("strMeasure") && value)
        .map(([_, value]) => value);

      return measures;
    }
  };

  return (
    <div className="bg-prach pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
      <div className="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <motion.div
              initial={{ x: "-10vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50, damping: 25 }}
              className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto"
            >
              <img
                alt=""
                src={recipe?.strMealThumb}
                className="absolute inset-0 size-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
              />
            </motion.div>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
            <div className=" flex justify-between">
              <Link
                to="/"
                className="text-lg text-orange-400 hover:scale-105 transition-transform duration-50"
              >
                ← Home
              </Link>
              <div
                className={`text-lg ${
                  isFavourite ? "text-red-500" : "text-orange-400"
                } cursor-pointer hover:scale-105 transition-transform duration-50`}
                onClick={() => handleFavourite(recipe as Recipe)}
              >
                {!isFavourite
                  ? "⭐Add to favourites"
                  : "Delete from favourites"}
              </div>
            </div>

            <figure className="relative isolate pt-6 sm:pt-12">
              <blockquote className="text-xl/8 font-semibold text-white sm:text-2xl/9">
                <div className="flex justify-between">
                  <div className="mb-3 text-sm text-green-500">
                    Ingridients:
                  </div>
                  <div className="mb-3 text-sm text-green-500">Measures:</div>
                </div>

                <div className="text-xs flex justify-between overflow-y-scroll max-h-32">
                  <ul>
                    {extractIngredients(recipe)?.map((ingr) => {
                      return (
                        <li key={Math.random() * 100}>{ingr as string}</li>
                      );
                    })}
                  </ul>
                  <div>
                    <ul>
                      {measures(recipe)?.map((mes) => {
                        return (
                          <li key={Math.random() * 100}>{mes as string}</li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </blockquote>
              <figcaption className="mt-8 text-base">
                <div className="font-semibold text-white text-sm overflow-y-scroll max-h-36">
                  {recipe?.strInstructions}
                </div>
                <a href={recipe?.strYoutube} className="mt-1 text-red-600 ">
                  YouTube
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

import { Link } from "react-router";
import { Recipe } from "../types/types";
import { getTotal } from "../utils/getTotalIngredients";

type Props = {
  favourites: Recipe[];
  handleFavourite: (recipe: Recipe) => void;
};

export const Favourites = ({ favourites, handleFavourite }: Props) => {
  const allIngredients = getTotal(favourites);
  return (
    <div className="bg-peach ">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Link className="font-bold text-lg" to="/">
          ← Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Favourite Recipes
        </h1>
        {favourites.length === 0 ? (
          <div className="text-xl">You have no favourite recipes</div>
        ) : (
          <div className="mt-12">
            <div>
              <div
                role="list"
                className="divide-y divide-gray-800 border-b border-t border-gray-800"
              >
                {favourites.map((favourite) => (
                  <div key={favourite.idMeal} className="flex py-6 sm:py-10">
                    <div className="shrink-0">
                      <img
                        alt={favourite.strMeal}
                        src={favourite.strMealThumb}
                        className="size-24 rounded-lg object-cover sm:size-32"
                      />
                    </div>

                    <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div>
                        <div className="flex justify-between sm:grid sm:grid-cols-2">
                          <div className="pr-6">
                            <h3 className="text-sm">{favourite.strMeal}</h3>
                            <p className="mt-1 text-sm text-gray-500">
                              {favourite.strCategory}
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center sm:absolute sm:left-1/2 sm:top-0 sm:mt-0 sm:block">
                          <button
                            type="button"
                            className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3"
                          >
                            <span onClick={() => handleFavourite(favourite)}>
                              Remove
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 sm:ml-32 sm:pl-6">
              <div className="rounded-lg bg-peachBrown px-4 py-6 sm:p-6 lg:p-8">
                <div className="mb-5">Total ingredients</div>
                <div className="flow-root">
                  <dl className="-my-4 divide-y divide-gray-800 text-sm">
                    {allIngredients.map((el) => {
                      return (
                        <div
                          key={el}
                          className="flex items-center justify-center py-4"
                        >
                          <dt className="text-gray-600">{el}</dt>
                        </div>
                      );
                    })}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

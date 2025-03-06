import { Link, useParams } from "react-router";
import { useRecipeById } from "../utils/hooks/useRecipeById";

export const RecipeDetail = () => {
  const { id } = useParams();
  const { data: recipe, isLoading } = useRecipeById(id as string);

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
    <div className="bg-white ">
      <Link className=" text-xl text-center" to="/">
        Home
      </Link>
      <div className="mx-auto   sm:px-6 sm:py-32 lg:px-8 h-screen ">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto py-5 lg:text-left">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {recipe?.strMeal}
            </h2>
            {!isLoading && (
              <div className="mt-6 text-pretty text-xs text-gray-300 flex justify-between">
                <ul>
                  <li className="text-orange-500"> Ingridients:</li>
                  {extractIngredients(recipe)?.map((ingr) => {
                    return (
                      <li key={Math.random() * 20}>
                        {ingr as string}
                      </li>
                    );
                  })}
                </ul>
                <ul>
                  <li className="text-green-600">Measures:</li>
                  {measures(recipe)?.map((mes) => {
                    return (
                      <li key={(Math.random() * 20)}>
                        {mes as string}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            <div className="text-xs pt-20 text-left text-yellow-500">
              {recipe?.strInstructions}
            </div>
            <a href={recipe?.strYoutube} className="text-red-600 font-bold">
              YouTube
            </a>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="App screenshot"
              src={recipe?.strMealThumb}
              width={1824}
              height={1080}
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

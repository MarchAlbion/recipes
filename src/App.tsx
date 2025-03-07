import { useState } from "react";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { RecipeDetail } from "./Components/RecipeDetail";
import { useRecipesByName } from "./utils/hooks/useRecipeByName";
import { useAllRecipes } from "./utils/hooks/useRecipes";
import { Routes, Route, useLocation } from "react-router";

import { getFilteredRecipes } from "./utils/getFilteredRecipes";
import { Category, Recipe } from "./types/types";
import { Spinner } from "./Components/Spinner";
import { Favourites } from "./Components/Favourites";
import { useCategories } from "./utils/hooks/useCategory";

function App() {
  const [search, setSearch] = useState("");
  const { data: recipes, isLoading } = useAllRecipes();
  const { data: searched } = useRecipesByName(search);
  const { data: categories = [] } = useCategories();

  const [favourite, setFavourite] = useState<Recipe[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.trimStart());
  };

  const location = useLocation();

  const isDetailsPage =
    location.pathname.includes("recipe") ||
    location.pathname.includes("favourite");

  const myRecipes = search ? searched : recipes;

  const allCategory: Category = {
    idCategory: "all",
    strCategory: "All",
    strCategoryDescription: "",
    strCategoryThumb: "",
  };

  const withAll = [allCategory, ...categories];

  const [filter, setFilter] = useState<Category>(withAll[0]);
  const handleFilterChange = (category: Category) => {
    setFilter(category);
  };

  const handleFavourite = (recipe: Recipe) => {
    const isFavourite = favourite.some((rec) => rec.idMeal === recipe.idMeal);

    if (isFavourite) {
      const filteredFavourite = favourite.filter(
        (rec) => rec.idMeal !== recipe.idMeal
      );
      setFavourite(filteredFavourite);
    } else {
      setFavourite((prev) => [...prev, recipe]);
    }
  };

  const filteredRecipes = getFilteredRecipes(filter, myRecipes);

  return (
    <div className="h-screen flex flex-col bg-peach">
      {!isDetailsPage && (
        <Header
          handleSearch={handleSearch}
          filter={filter}
          handleFilterChange={handleFilterChange}
          withAll={withAll}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={
            isLoading ? (
              <Spinner />
            ) : (
              <Main recipes={filteredRecipes} filter={filter} />
            )
          }
        />
        <Route
          path="/recipe/:id"
          element={
            <RecipeDetail
              handleFavourite={handleFavourite}
              favourite={favourite}
            />
          }
        />
        <Route
          path="/favourite"
          element={
            <Favourites
              favourites={favourite}
              handleFavourite={handleFavourite}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

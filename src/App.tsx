import { useState } from "react";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { RecipeDetail } from "./Components/RecipeDetail";
import { useRecipesByName } from "./utils/hooks/useRecipeByName";
import { useAllRecipes } from "./utils/hooks/useRecipes";
import { Routes, Route, useLocation } from "react-router";

import { getFilteredRecipes } from "./utils/getFilteredRecipes";
import { Category } from "./types/types";

function App() {
  const [search, setSearch] = useState("");
  const { data: recipes } = useAllRecipes();
  const { data: searched } = useRecipesByName(search);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const location = useLocation();

  const isDetailsPage = location.pathname.includes("recipe");

  const myRecipes = search ? searched : recipes;

  const [filter, setFilter] = useState<Category>({
    idCategory: "all",
    strCategory: "All",
    strCategoryDescription: "",
    strCategoryThumb: "",
  });

  const handleFilterChange = (category: Category) => {
    setFilter(category);
  };

  const filteredRecipes = getFilteredRecipes(filter, myRecipes);

  return (
    <div className="h-screen flex flex-col">
      {!isDetailsPage && (
        <Header
          handleSearch={handleSearch}
          handleFilterChange={handleFilterChange}
        />
      )}
      <Routes>
        <Route path="/" element={<Main recipes={filteredRecipes} />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}

export default App;

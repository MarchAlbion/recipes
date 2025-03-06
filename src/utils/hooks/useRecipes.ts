import { useQuery } from "@tanstack/react-query";
import { getAllRecipes } from "../getAllRecipes";
import { Recipe } from "../../types/types";

export const useAllRecipes = () => {
  return useQuery<Recipe[]>({
    queryKey: ["allRecipes"],
    queryFn: getAllRecipes,
    staleTime: 5 * 60 * 1000,
  });
};

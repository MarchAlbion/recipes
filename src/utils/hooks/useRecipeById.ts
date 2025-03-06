import { useQuery } from "@tanstack/react-query";
import { getRecipeById } from "../getRecipeById";
import { Recipe } from "../../types/types";

export const useRecipeById = (id: string) => {
  return useQuery<Recipe>({
    queryKey: ["recipe", id],
    queryFn: () => getRecipeById(id),
    enabled: !!id,
  });
};

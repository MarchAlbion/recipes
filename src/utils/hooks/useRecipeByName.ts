import { useQuery } from "@tanstack/react-query";
import { Recipe } from "../../types/types";
import { getByName } from "../getByName";

export const useRecipesByName = (name: string) => {
  return useQuery<Recipe[]>({
    queryKey: ["recipes", name],
    queryFn: () => getByName(name),
    enabled: !!name,
  });
};

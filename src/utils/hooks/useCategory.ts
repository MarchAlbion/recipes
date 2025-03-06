import { useQuery } from "@tanstack/react-query";

import { getCategory } from "../getCategory";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategory,
  });
};

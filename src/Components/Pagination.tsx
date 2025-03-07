import { useEffect, useState } from "react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";
import { Recipe } from "../types/types";

type PaginationProps = {
  recipesPerPage: number;
  totalRecipes: number | undefined;
  onPageChange: (page: number) => void;
  recipes: Recipe[] | undefined;
};

export const Pagination = ({
  recipesPerPage,
  totalRecipes = 1,
  onPageChange,
  recipes,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalRecipes / recipesPerPage);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange(page);
  };

  const pages = [];
  let startPage = Math.max(1, currentPage - 3);
  let endPage = Math.min(totalPages, currentPage + 3);

  if (totalPages <= 7) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= 4) {
      startPage = 1;
      endPage = 7;
    } else if (currentPage >= totalPages - 3) {
      startPage = totalPages - 6;
      endPage = totalPages;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  useEffect(() => {
    setCurrentPage(1);
    onPageChange(1)
  }, [totalRecipes]);

  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 bg-peachBrown ">
      <div className="-mt-px flex w-0 flex-1">
        <span
          onClick={() => goToPage(currentPage - 1)}
          className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 cursor-pointer"
        >
          <ArrowLongLeftIcon
            aria-hidden="true"
            className="mr-3 size-5 text-gray-400"
          />
          Previous
        </span>
      </div>

      <div className="hidden md:-mt-px md:flex ">
        {pages.map((page) => (
          <span
            key={page}
            onClick={() => goToPage(page)}
            className={`inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium ${
              page === currentPage
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 cursor-pointer"
            }`}
          >
            {page}
          </span>
        ))}
      </div>

      <div className="-mt-px flex w-0 flex-1 justify-end">
        <span
          onClick={() => goToPage(currentPage + 1)}
          className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 cursor-pointer"
        >
          Next
          <ArrowLongRightIcon
            aria-hidden="true"
            className="ml-3 size-5 text-gray-400"
          />
        </span>
      </div>
    </nav>
  );
};

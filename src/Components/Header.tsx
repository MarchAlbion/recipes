import { Link } from "react-router";
import bread from "../images/bread.jpg";
import { Category } from "../types/types";
import { useCategories } from "../utils/hooks/useCategory";
import { Input } from "./Input";
import { Select } from "./Select";

type Props = {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFilterChange: (category: Category) => void;
  filter: Category;
  withAll:Category[]
};

export const Header = ({ handleSearch, handleFilterChange,filter,withAll }: Props) => {
  const { data: categories, isLoading } = useCategories();

  return (
    <header
      style={{ backgroundImage: `url(${bread})` }}
      className="bg-cover bg-center h-80 flex justify-center items-center flex-col gap-4 p-5"
    >
      <Link
        to="/favourite"
        className="bg-gray-800 text-white font-bold p-2 rounded-xl self-end hover:bg-orange-400 transition-colors duration-150 ease-in-out"
      >
        Favourite Recipes
      </Link>
      <Input handleSearch={handleSearch} />
      <div className="min-w-52">
        {!isLoading && (
          <Select
            categories={categories}
            isLoading={isLoading}
            handleFilterChange={handleFilterChange}
            filter={filter}
            withAll={withAll}
          />
        )}
      </div>
    </header>
  );
};

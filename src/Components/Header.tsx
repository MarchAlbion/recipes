import bread from "../images/bread.jpg";
import { Category } from "../types/types";
import { useCategories } from "../utils/hooks/useCategory";
import { Input } from "./Input";
import { Select } from "./Select";

type Props = {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFilterChange: (category: Category) => void;
};

export const Header = ({ handleSearch, handleFilterChange }: Props) => {
  const { data: categories, isLoading } = useCategories();

  return (
    <header
      style={{ backgroundImage: `url(${bread})` }}
      className="bg-cover bg-center h-80 flex justify-center items-center flex-col gap-4 p-5"
    >
      <Input handleSearch={handleSearch} />
      <div className="min-w-52">
        {!isLoading && (
          <Select
            categories={categories}
            isLoading={isLoading}
            handleFilterChange={handleFilterChange}
          />
        )}
      </div>
    </header>
  );
};

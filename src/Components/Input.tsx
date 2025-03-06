type Props = {
  name?: string;
  id?: string;
  type?: "text" | "number";
  placeholder?: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  name = "search",
  id = "search",
  type = "text",
  placeholder = "Find recipe",
  handleSearch,
}: Props) => {
  return (
    <div>
      <div className="relative mt-2">
        <input
          onChange={handleSearch}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          className="peer block w-full bg-transparent px-3 py-1.5 text-white placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-2xl"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600 "
        />
      </div>
    </div>
  );
};

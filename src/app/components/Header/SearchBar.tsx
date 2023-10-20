import { BiSolidDownArrow } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
const SearchBar = () => {
  return (
    <div className="md:flex bg-gray-300 hidden rounded-sm">
      <label className="flex items-center p-2 text-black/60 cursor-pointer">
        All <BiSolidDownArrow />
      </label>

      <input
        placeholder="Search Amazon.in"
        className="w-[600px] outline-none focus-visible:border-yellow-500 border-[3px] border-transparent"
      />
      <div className="bg-yellow-400 p-2 text-black">
        <BsSearch size={20} />
      </div>
    </div>
  );
};

export default SearchBar;

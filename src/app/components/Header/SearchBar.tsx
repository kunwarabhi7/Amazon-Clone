import { BiSolidDownArrow } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
const SearchBar = () => {
  return (
    <div className="flex bg-gray-300">
      <label className="flex items-center text-black/60">
        All <BiSolidDownArrow />
      </label>

      <input placeholder="Search Amazon.in" />
      <div className="bg-yellow-400">
        <BsSearch />
      </div>
    </div>
  );
};

export default SearchBar;

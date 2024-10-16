import search from "@/assets/icons/search.svg";
import React, { Dispatch, SetStateAction } from "react";
interface ISearchBarComponent {
  isDarkMode: boolean;
  handleSearch: () => void;
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
}
const SearchBarComponent: React.FC<ISearchBarComponent> = ({
  isDarkMode,
  setCity,
  handleSearch,
  city,
}) => {
  return (
    <div className="mb-[80px] flex gap-[14px] items-center">
      <input
        onChange={(e) => setCity(e.target.value)}
        type="text"
        value={city}
        placeholder="Country"
        className={`w-full p-4 rounded-lg ${
          isDarkMode
            ? "bg-[#1A1A1A] focus:bg-[#1A1A1A] focus:bg-opacity-30"
            : "bg-white focus:bg-[#FFF] focus:bg-opacity-30"
        } text-white placeholder-white bg-opacity-30 focus:outline-none`}
      />
      <button
        onClick={handleSearch}
        className="bg-purple-500 p-3 rounded-[20px]"
      >
        <img src={search} />
      </button>
    </div>
  );
};
export default SearchBarComponent;

import search from "@/assets/icons/search.svg";
import deleteIcon from "@/assets/icons/delete.svg";
import React from "react";
interface ISearchHistoryComponent {
  isDarkMode: boolean;
  searchHistory: { city: string; date: string; id: number }[];
  handleDeleteSearchHistory: (id: number) => void;
  handleSearchAgain: (city: string) => void;
}
const SearchHistoryComponent: React.FC<ISearchHistoryComponent> = ({
  isDarkMode,
  searchHistory,
  handleSearchAgain,
  handleDeleteSearchHistory,
}) => {
  return (
    <div
      className={`mt-4 ${
        isDarkMode ? "text-[#FFF]" : "text-[#000]"
      }  bg-white bg-opacity-20 rounded-3xl p-[15px] overflow-y-auto scroll-smooth h-96`}
    >
      <h3 className="text-lg mb-2">Search History</h3>
      <div className="space-y-2">
        {searchHistory.map((history) => (
          <div
            key={history.id}
            className="flex justify-between items-center p-3 bg-white bg-opacity-30 rounded-lg hover:bg-opacity-40 transition"
          >
            <div>{history.city}</div>

            <div className="flex items-center gap-[10px]">
              <div
                className={`text-sm ${
                  isDarkMode ? "text-[#000] text-opacity-80" : "text-[#000]"
                } `}
              >
                {history.date}
              </div>
              <button
                onClick={() => handleSearchAgain(history.city)}
                className="p-2 bg-purple-500 rounded-[50px]"
              >
                <img src={search} width={20} />
              </button>
              <button
                onClick={() => handleDeleteSearchHistory(history.id)}
                className="p-2 bg-purple-500 rounded-[50px]"
              >
                <img src={deleteIcon} width={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SearchHistoryComponent;

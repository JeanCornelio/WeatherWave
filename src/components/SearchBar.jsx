import { useCallback, useRef } from "react";
import { useSearch } from "../hooks/useSearch";
import { Results } from "./Results";
import { useResult } from "../hooks/useResults";

export const SearchBar = () => {
  const form = useRef(null);
  const {
    search,
    handleSubmit,
    onSubmit,
    results,
    getCurrentData,
    setCurrentLocation,
    clearSearch
  } = useSearch();
  const { getLocation, showResults, handleShowResult } = useResult({ form });
 
  const setSelectedResult = useCallback(
    (result) => {
      clearSearch()
      getCurrentData(result);
    },

    [search]
  );
  return (
    <form
      className="flex items-center relative w-full"
      onSubmit={onSubmit}
      ref={form}
    >
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <span
            className="  md:p-2.5 md:text-2xl icon-[material-symbols--search] text-2xl text-sky-blue-900 dark:text-sky-blue-400"
            role="img"
            aria-hidden="true"
          ></span>
        </div>
        <input
          type="text"
          className="bg-sky-blue-200   text-sky-blue-800 dark:text-white dark:bg-slate-800 text-sm rounded-lg
            block w-full ps-10 p-3 focus:outline-none focus:ring focus:ring-sky-blue-400 placeholder:text-sky-blue-400  dark:focus:ring-sky-blue-900 dark:placeholder:text-gray-500"
          value={search}
          placeholder="Santo Domingo, Paris, Monte video..."
          onChange={handleSubmit}
          onClick={() => handleShowResult(true)}
        />
        <Results
          form={form}
          showResults={showResults}
          getLocation={getLocation}
          handleShowResult={handleShowResult}
          results={results}
          setSelectedResult={setSelectedResult}
          setCurrentLocation={setCurrentLocation}
        />
      </div>
    </form>
  );
};

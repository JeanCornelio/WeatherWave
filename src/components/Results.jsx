

export function Results({
  showResults,
  handleShowResult,
  results,
  setSelectedResult,
  setCurrentLocation,
}) {



  const selectResult = (result) => {
    setSelectedResult(result);
    handleShowResult(false);
  
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
    handleShowResult(false);
  };

  return (
    <>
      {showResults && (
        <ul className="w-full border border-gray-400  divide-y divide-gray-400 dark:divide-slate-700    absolute z-50 bg-sky-blue-200 dark:bg-slate-800 dark:border-slate-700 rounded-t-md">
          <li className="py-4 cursor-pointer" onClick={getLocation}>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 truncate dark:text-white flex items-center gap-2">
                  <span
                    className="icon-[tabler--location] text-xl text-sky-blue-900 dark:text-sky-blue-400"
                    role="img"
                    aria-hidden="true"
                  ></span>
                  <span className="text-sky-blue-900 dark:text-gray-400">
                    Use your current location
                  </span>
                </div>
              </div>
            </div>
          </li>
          {results.length > 0 &&
            results?.map((result) => (
              <li
                className="py-4 cursor-pointer hover:bg-sky-blue-600 group  hover:text-white   dark:hover:bg-slate-700"
                onClick={() => selectResult(result)}
                key={result.id}
              >
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium   truncate dark:text-white">
                      {result.name}
                    </p>
                    <p className="text-sm text-gray-500 group-hover:text-white truncate dark:text-gray-400">
                      {result.country}
                    </p>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      )}
    </>
  );
}

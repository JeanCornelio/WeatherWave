export function Results ({
  showResults,
  getLocation,
  handleShowResult,
  results,
  setSelectedResult
}) {
  const selectResult = (result) => {
    console.log(result)
    setSelectedResult(result)
    handleShowResult(false)
  }

  return (
    <>
      {showResults && (
        <ul className="w-full border border-gray-400  divide-y divide-gray-400 dark:divide-gray-400  absolute z-50 bg-sky-blue-200 rounded-lg">
          <li className="py-4 cursor-pointer" onClick={getLocation}>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 truncate dark:text-white flex items-center gap-2">
                  <span
                    className="icon-[tabler--location] text-xl text-sky-blue-900"
                    role="img"
                    aria-hidden="true"
                  ></span>
                  <span className="text-sky-blue-900">
                    Use your current location
                  </span>
                </div>
              </div>
            </div>
          </li>
          {results.length > 0 &&
            results?.map((result) => (
              <li
                className="py-4 cursor-pointer"
                onClick={() => selectResult(result)}
                key={result.id}
              >
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {result.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {result.country}
                    </p>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      )}
    </>
  )
}
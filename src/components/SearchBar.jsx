import { useRef } from 'react'
import { useSearch } from '../hooks/useSearch'

import { Results } from './Results'
import { useResult } from '../hooks/useResults'
import { getCurrent } from '../services/current'

export const SearchBar = () => {
  const form = useRef(null)

  const { search, handleSubmit, onSubmit, results } = useSearch()
  const { getLocation, showResults, handleShowResult } = useResult({ form })

  const setSelectedResult = (result) => {
    getCurrentLocation(result)
  }

  const getCurrentLocation = async (result) => {
    const name = result.name
    const newCurrentData = await getCurrent({ name })
    // Dispatch global State
    console.log(newCurrentData)
  }

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
            className="icon-[material-symbols--search] text-2xl text-sky-blue-900"
            role="img"
            aria-hidden="true"
          ></span>
        </div>
        <input
          type="text"
          className="bg-sky-blue-200  text-sky-blue-800 text-sm rounded-lg
            block w-full ps-10 p-3 focus:outline-none focus:ring focus:ring-sky-blue-400 placeholder:text-sky-blue-400"
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
        />
      </div>
    </form>
  )
}

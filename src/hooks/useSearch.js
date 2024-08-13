import { useContext, useEffect, useRef, useState } from 'react'
import { autoCompleteSearch } from '../services/autoComplete'
import { GlobalStateContext } from '../context/GlobalStateProvider'
import { getCurrent, getCurrentLatAndLon } from '../services/current'
export function useSearch () {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const { updateCurrentData, addRecentSearch, state } = useContext(GlobalStateContext)
  const searchData = useRef(null)

  const handleSubmit = (e) => {
    setSearch(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    const getData = setTimeout(() => {
      getResults()
    }, 300)

    return () => clearTimeout(getData)
  }, [search])

  const getResults = async () => {
    const newAutoComplete = await autoCompleteSearch({ search })
    setResults(newAutoComplete)
  }

  const setCurrentLocation = async (currentLocation) => {
    const newCurrentData = await getCurrentLatAndLon(currentLocation)
    const { location, current } = newCurrentData
    // Dispatch global State

    searchData.current = newCurrentData.location.localtime_epoch

    if (searchData.current !== state?.current?.location?.localtime_epoch) {
      updateCurrentData(newCurrentData)
      addRecentSearch({ ...location, ...current })
    }
  }

  const getCurrentData = async (result) => {
    const id = result.id
    const newCurrentData = await getCurrent({ id })
    const { location, current } = newCurrentData
    // Dispatch global State
    searchData.current = newCurrentData.location.localtime_epoch
    console.log()
    if (searchData.current !== state?.current?.location?.localtime_epoch) {
      updateCurrentData(newCurrentData)
      addRecentSearch({ ...location, ...current })
    }
  }

  return {
    handleSubmit,
    onSubmit,
    setCurrentLocation,
    getCurrentData,
    results
  }
}

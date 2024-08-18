import { useContext, useEffect, useRef, useState } from 'react'
import { autoCompleteSearch } from '../services/autoComplete'
import { GlobalStateContext } from '../context/GlobalStateProvider'
import { getCurrent, getCurrentLatAndLon } from '../services/current'
import { useLocalStorage } from './useLocaleStorage'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const { updateCurrentData, addRecentSearch, state } =
    useContext(GlobalStateContext)
  const searchData = useRef(null)
  const { setCurrentDayToLocalStorage } = useLocalStorage()

  const handleSubmit = (e) => {
    setSearch(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  const clearSearch = () =>{
    setSearch('')
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

    // Dispatch global State
    searchData.current = newCurrentData.location.localtime_epoch
    if (searchData.current !== state?.current?.location?.localtime_epoch) {
      updateCurrentData(newCurrentData)
      addRecentSearch(newCurrentData)
      setCurrentDayToLocalStorage(newCurrentData)
    }
  }

  const getCurrentData = async (result) => {
    const id = result.id
    const newCurrentData = await getCurrent({ id })
    // Dispatch global State
    updateCurrentData(newCurrentData)
    addRecentSearch(newCurrentData)
    setCurrentDayToLocalStorage(newCurrentData)
  }

  return {
    search,
    handleSubmit,
    onSubmit,
    setCurrentLocation,
    getCurrentData,
    results,
    clearSearch
  }
}

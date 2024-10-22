import { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { GlobalStateContext } from '../context/GlobalStateProvider'
import { useLocalStorage } from './useLocaleStorage'

export const useDay = () => {
  const { state } = useContext(GlobalStateContext)
  const { temp, recentSearch } = state
  const { location, current, forecast } = state.current
  const [currentDayHourData, setCurrentDayHourData] = useState(null)
  const [currentDay, setCurrentDay] = useState(null)
  const dayCardSelected = useRef(null)
  const { setRecentSearchToLocalStorage } = useLocalStorage()

  useEffect(() => {
    setRecentSearchToLocalStorage(recentSearch)
  }, [recentSearch])

  const handleDay = (currentDayInfo) => {
    const { hour, id, date, day } = currentDayInfo
    dayCardSelected.current = id
    if (dayCardSelected.current !== currentDay) {
      setCurrentDay(id)
      setCurrentDayHourData({ hour, date, day })
    }
  }

  const clearChart = useMemo(() => {
    setCurrentDayHourData(null)
    setCurrentDay(null)
  }, [location])

  return {
    handleDay,
    current,
    forecast,
    temp,
    currentDayHourData,
    currentDay,
    location,
    recentSearch
  }
}

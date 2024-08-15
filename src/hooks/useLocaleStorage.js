import { useContext, useEffect, useState } from 'react'
import { GlobalStateContext } from '../context/GlobalStateProvider'

export const useLocalStorage = () => {
  const setRecentSearchToLocalStorage = (currentData) => {
    localStorage.setItem('recent_search', JSON.stringify(currentData))
  }
  const setTempToLocalStorage = (currentData) => {
    localStorage.setItem('temp', JSON.stringify(currentData))
  }

  const setCurrentDayToLocalStorage = (currentData) => {
    localStorage.setItem('current_day', JSON.stringify(currentData))
  }

  return {
    setRecentSearchToLocalStorage,
    setTempToLocalStorage,
    setCurrentDayToLocalStorage
  }
}

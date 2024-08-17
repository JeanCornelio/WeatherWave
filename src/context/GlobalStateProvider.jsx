import { createContext, useReducer } from 'react'
import { ACTIONS, initialState, reducer } from './actionTypes'

// 1. Create Context
export const GlobalStateContext = createContext()

// 2. Create Provider
export const GlobalStateProvider = ({ children }) => {
  // 3.Create Reducer
  const [state, dispatch] = useReducer(reducer, initialState)

  // 4.Create the actions
  const addRecentSearch = (dataItem) => {
    dispatch({ type: ACTIONS.ADD_RECENT_SEARCH, payload: dataItem })
  }

  const updateCurrentData = (newCurrentData) => {
    dispatch({ type: ACTIONS.UPDATE_CURRENT_DATA, payload: newCurrentData })
  }

  const updateTemp = (newTemp) => {
    dispatch({ type: ACTIONS.UPDATE_TEMP, payload: newTemp })
  }
  const setDarkMode = (value) => {
    document.documentElement.classList.toggle("dark");
    document.querySelector("body").classList.toggle("dark:bg-slate-900");
    state.darkMode ? (localStorage.theme = "light") : (localStorage.theme = "dark");
    dispatch({ type: ACTIONS.SET_DARK_MODE, payload: value })
  }

  // 5. Return the context with childrens
  return (
    <GlobalStateContext.Provider
      value={{ state, addRecentSearch, updateCurrentData, updateTemp, setDarkMode, }}
    >
      {children}
    </GlobalStateContext.Provider>
  )
}

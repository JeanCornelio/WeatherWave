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

  // 5. Return the context with childrens
  return (
    <GlobalStateContext.Provider
      value={{ state, addRecentSearch, updateCurrentData, updateTemp }}
    >
      {children}
    </GlobalStateContext.Provider>
  )
}

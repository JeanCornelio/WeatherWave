import { createContext, useReducer } from 'react'
import { ACTIONS, initialState, reducer } from './actionTypes'

// 1. Create Context
export const GlobalStateContext = createContext()

// 2. Create Provider
export const GlobalStateProvider = ({ children }) => {
// 3.Create Reducer
  const [state, dispatch] = useReducer(reducer, initialState)

  const addData = (dataItem) => {
    dispatch({ type: ACTIONS.ADD_DATA, payload: dataItem })
  }

  const updateCurrentData = (newCurrentData) => {
    dispatch({ type: ACTIONS.UPDATE_CURRENT_DATA, payload: newCurrentData })
  }

  const updateTemp = (newTemp) => {
    dispatch({ type: ACTIONS.UPDATE_TEMP, payload: newTemp })
  }

  return (
    <GlobalStateContext.Provider value={{ state, addData, updateCurrentData, updateTemp }}>
        {children}
    </GlobalStateContext.Provider>
  )
}

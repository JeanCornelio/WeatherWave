import { createContext, useReducer } from 'react'
import { ACTIONS, initialState, reducer } from './actionTypes'

export const GlobalStateContext = createContext()

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addData = (dataItem) => {
    dispatch({ type: ACTIONS.ADD_DATA, payload: dataItem })
  }

  const updateCurrentData = (newCurrentData) => {
    dispatch({ type: ACTIONS.UPDATE_CURRENT_DATA, payload: newCurrentData })
  }

  return (
    <GlobalStateContext.Provider value={{ state, addData, updateCurrentData }}>
        {children}
    </GlobalStateContext.Provider>
  )
}

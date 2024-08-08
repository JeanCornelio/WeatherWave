export const ACTIONS = {
  ADD_DATA: 'add_data',
  REMOVE_DATA: 'remove_data',
  UPDATE_CURRENT_DATA: 'update_current_data'
}

export const initialState = {
  current: null,
  recentSearch: []
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_DATA:
      return {
        ...state,
        recentSearch: [...state.data, action.payload]
      }
    case ACTIONS.UPDATE_CURRENT_DATA:
      return {
        ...state,
        current: action.payload
      }

    default:
      return state
  }
}

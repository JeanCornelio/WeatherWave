export const ACTIONS = {
  ADD_RECENT_SEARCH: 'add_recent_search',
  REMOVE_DATA: 'remove_data',
  UPDATE_CURRENT_DATA: 'update_current_data',
  UPDATE_TEMP: 'update_temp'
}

export const initialState = {
  current: null,
  temp: 'c', // c: celcius, f: fahrenheit
  recentSearch: []
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_RECENT_SEARCH: {
      const { recentSearch } = state
      const location = recentSearch.find(el =>
        el.name === action.payload.name &&
        el.lat === action.payload.lat &&
        el.lon === action.payload.lon

      )
      console.log('location:', location, 'payload:', action.payload)
      if (location) {
        console.log('existe')
        return {
          ...state,
          recentSearch: [...recentSearch]
        }
      } else {
        console.log('No existe')

        return {
          ...state,
          recentSearch: [action.payload, ...recentSearch]
        }
      }
    }

    case ACTIONS.UPDATE_CURRENT_DATA:
      return {
        ...state,
        current: action.payload
      }
    case ACTIONS.UPDATE_TEMP:
      return {
        ...state,
        temp: action.payload
      }

    default:
      return state
  }
}

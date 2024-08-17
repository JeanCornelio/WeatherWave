export const ACTIONS = {
  ADD_RECENT_SEARCH: 'add_recent_search',
  REMOVE_DATA: 'remove_data',
  UPDATE_CURRENT_DATA: 'update_current_data',
  UPDATE_TEMP: 'update_temp',
  SET_DARK_MODE: 'set_dark_mode'
}

const recentSearchFromLocalStorage = JSON.parse(localStorage.getItem('recent_search'))
const tempFromLocalStorage = JSON.parse(localStorage.getItem('temp'))
const currentFromLocalStorage = JSON.parse(localStorage.getItem('current_day'))
const theme =
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches);

export const initialState = {
  current: currentFromLocalStorage || null,
  temp: tempFromLocalStorage || 'c', // c: celcius, f: fahrenheit
  recentSearch: recentSearchFromLocalStorage || [],
  darkMode: theme
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_RECENT_SEARCH: {
      const { recentSearch } = state

      // Remove the location if it exists
      const updatedRecentSearches = recentSearch.filter(
        (el) =>
          el.location.name !== action.payload.location.name ||
          el.location.lat !== action.payload.location.lat ||
          el.location.lon !== action.payload.location.lon
      )

      updatedRecentSearches.unshift(action.payload)

      const lastOneRecentSearch = updatedRecentSearches.slice(0, 15)

      return {
        ...state,
        recentSearch: [...lastOneRecentSearch]
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
    case ACTIONS.SET_DARK_MODE:
      return {
        ...state,
        darkMode: action.payload
      }

    default:
      return state
  }
}

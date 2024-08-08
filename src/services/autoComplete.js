import { API_URL, API_KEY } from '../global/enviroment'
export const autoCompleteSearch = async ({ search }) => {
  if (search.length > 3) {
    try {
      const res = await fetch(`${API_URL}search.json?key=${API_KEY}&q=${search}`)
      const json = await res.json()
      return json
    } catch (error) {
      throw new Error(error)
    }
  } else {
    return []
  }
}

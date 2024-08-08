import { API_URL, API_KEY } from '../global/enviroment'
export const getCurrent = async ({ name }) => {
  if (name !== null) {
    try {
      const res = await fetch(`${API_URL}current.json?key=${API_KEY}&q=${name}`)
      const json = await res.json()
      return json
    } catch (error) {
      throw new Error(error)
    }
  } else {
    return []
  }
}

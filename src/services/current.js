import { API_URL, API_KEY } from '../global/enviroment'
export const getCurrent = async ({ id }) => {
  if (id !== null) {
    try {
      const res = await fetch(`${API_URL}forecast.json?key=${API_KEY}&q=id:${id}&days=1`)
      const json = await res.json()

      return json
    } catch (error) {
      throw new Error(error)
    }
  } else {
    return []
  }
}

export const getCurrentLatAndLon = async ({ lat, lon }) => {
  if (lat !== null || lon !== null) {
    try {
      const res = await fetch(`${API_URL}forecast.json?key=${API_KEY}&q=${lat},${lon}&days=1`)
      const json = await res.json()

      return json
    } catch (error) {
      throw new Error(error)
    }
  } else {
    return []
  }
}

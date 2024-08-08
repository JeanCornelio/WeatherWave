import { useContext } from 'react'
import './App.css'
import { Location } from './auth/Location'
import { WeatherApp } from './weather/WeatherApp'
import { GlobalStateContext } from './context/GlobalStateProvider'

function App () {
  const { state } = useContext(GlobalStateContext)

  console.log(state)
  return (
    <div className='bg-sky-blue-300'>
     {
      state.current ? <WeatherApp/> : <Location/>
}

    </div>

  )
}

export default App

import './App.css'
import { Location } from './auth/Location'
import { WeatherApp } from './weather/WeatherApp'

function App () {
  return (
    <div className='bg-sky-blue-300'>
     {
      true ? <WeatherApp/> : <Location/>
}

    </div>

  )
}

export default App

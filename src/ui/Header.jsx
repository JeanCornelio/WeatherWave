import { useContext, useEffect, useState } from 'react'
import { SearchBar } from '../components'
import { GlobalStateContext } from '../context/GlobalStateProvider'
import { useLocalStorage } from '../hooks/useLocaleStorage'

export const Header = () => {
  const { updateCurrentData, updateTemp, state } = useContext(GlobalStateContext)
  const { temp } = state
  const toggletemp = temp !== 'c' ? 'c' : 'f'
  const { setTempToLocalStorage, setCurrentDayToLocalStorage } = useLocalStorage()
  const goBack = () => {
    updateCurrentData(null)
    setCurrentDayToLocalStorage(null)
  }

  const handleTemp = () => {
    updateTemp(toggletemp)
    setTempToLocalStorage(toggletemp)
  }

  return (
    <>
      <div className="container flex justify-end items-center  mx-auto py-5 text-gray-700">
        <div className="me-auto">
           <button className="font-bold text-sky-blue-900 text-xl" onClick={goBack}>WeatherWave</button>
        </div>
        <div className="flex  gap-2 w-2/3 justify-end ">
          <button className="p-2.5 ms-2 flex rounded-md text-sky-blue-900 bg-sky-blue-200 hover:bg-sky-blue-600 hover:text-white text-2xl  transition "
          onClick={handleTemp}>

            <span className={ temp === 'c' ? 'icon-[carbon--temperature-fahrenheit]' : 'icon-[carbon--temperature-celsius]'}/>
          </button>
          <button className=" p-2.5 flex rounded-md bg-sky-blue-200 text-sky-blue-900 hover:bg-sky-blue-600 hover:text-white  transition ">
            <span className="icon-[material-symbols--dark-mode-outline] text-2xl  " />
          </button>
          <div className='w-1/2'>

          <SearchBar/>
          </div>
        </div>
      </div>
    </>
  )
}

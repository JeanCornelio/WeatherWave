import { useContext } from 'react'
import { SearchBar } from '../components'
import { GlobalStateContext } from '../context/GlobalStateProvider'
import { useLocalStorage } from '../hooks/useLocaleStorage'



export const Header = () => {
  const { updateCurrentData, updateTemp, state, setDarkMode } = useContext(GlobalStateContext)
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
           <button className="font-bold text-sky-blue-900 dark:text-white text-md  md:text-xl" onClick={goBack}>WeatherWave</button>
        </div>
        <div className="flex  gap-2 w-2/3 justify-end  h-auto">
          <button className=" p-2.5 text-2xl  flex justify-center items-center rounded-md text-sky-blue-900 bg-sky-blue-200 hover:bg-sky-blue-600 hover:text-white dark:bg-slate-800 dark:border-slate-600 dark:text-white dark:hover:bg-slate-700   transition "
          onClick={handleTemp}>

            <span className={ temp === 'c' ? 'icon-[carbon--temperature-fahrenheit]' : 'icon-[carbon--temperature-celsius]'}/>
          </button>
          <button onClick={() =>  setDarkMode(!state.darkMode)} className=" p-2.5 text-2xl  flex justify-center items-center rounded-md text-sky-blue-900 bg-sky-blue-200 hover:bg-sky-blue-600 hover:text-white dark:bg-slate-800 dark:border-slate-600 dark:text-white dark:hover:bg-slate-700  transition ">
            <span className="icon-[material-symbols--dark-mode-outline] text-2xl  " />
          </button>
          <button className="p-2.5 text-2xl md:text-2xl  flex justify-center items-center rounded-md text-sky-blue-900 bg-sky-blue-200 hover:bg-sky-blue-600 hover:text-white dark:bg-slate-800 dark:border-slate-600 dark:text-white dark:hover:bg-slate-700   transition    md:hidden">
            <span className="icon-[material-symbols--search] text-2xl  " />
        
          </button>
          <div className='w-1/2 hidden md:block '>

          <SearchBar/>
          </div>
        </div>
      </div>
    </>
  )
}

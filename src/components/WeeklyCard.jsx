import { useContext } from 'react'
import { Condition } from './Condition'
import { GlobalStateContext } from '../context/GlobalStateProvider'

export const WeeklyCard = (props) => {
  const { state, updateCurrentData } = useContext(GlobalStateContext)
  const { temp } = state
  const { current, location } = props

  const setCurrentDay = () => {
    updateCurrentData(props)
  }

  return (
    <div onClick={setCurrentDay} className="bg-white shadow-md   p-4 w-48 h-72 cursor-pointer   flex flex-col justify-between items-center  px-3 transition ease-linear rounded-3xl ">
      <Condition condition={current.condition} />
      <p className="text-sm text-center font-semibold text-gray-500 uppercase">
        {location.country}
      </p>
      <p className="text-sm text-center font-semibold text-sky-blue-600">
        {location.name}
      </p>

      <h1 className="text-4xl font-extrabold text-sky-blue-600">
        {' '}
        {current[`temp_${temp}`]}°<span className="uppercase">{temp}</span>
      </h1>
    </div>
  )
}

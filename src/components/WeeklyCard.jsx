import { useContext } from 'react'
import { Condition } from './Condition'
import { GlobalStateContext } from '../context/GlobalStateProvider'

export const WeeklyCard = (props) => {
  const { state } = useContext(GlobalStateContext)
  const { temp } = state
  console.log(props)
  return (
    <div
      className='bg-white shadow-md   p-4 w-48 h-72    flex flex-col justify-between items-center  px-3 transition ease-linear rounded-3xl '
    >
     <Condition condition={props.condition} />
     <p className='text-md text-center mt-2 font-semibold text-sky-blue-600'>{props.name}</p>

      <h1 className="text-5xl font-bold text-sky-blue-900 "> {props[`temp_${temp}`]}°<span className='uppercase'>{temp}</span></h1>
    </div>
  )
}

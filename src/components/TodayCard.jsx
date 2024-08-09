import { useContext } from 'react'
import { Condition } from './Condition'
import { GlobalStateContext } from '../context/GlobalStateProvider'
import { dateTransform } from '../helper'

export const TodayCard = ({ hour }) => {
  const { state } = useContext(GlobalStateContext)
  const { temp } = state

  return (
    <div className="bg-white shadow-md hover:bg-sky-blue-500 hover:text-white  placeholder: p-4    rounded-3xl flex flex-col items-center  px-3 transition ease-linear ">

      <Condition condition={hour.condition} />
     <div className="flex gap-2 items-center">
        <h1 className="text-3xl font-bold text-sky-blue-900 ">
          {hour[`temp_${temp}`]}°<span className='uppercase text-xl'>{temp}</span>
        </h1>
        <h3 className="text-xl font-bold text-sky-blue-300 self-center">{hour[`temp_${temp}`]}°<span className='uppercase text-xl'>{temp}</span></h3>
      </div>
      <div className="flex gap-3">
        <p>45km/h</p>
        <p>70%</p>
        <p>Light rain</p>
      </div>
      <div className="flex gap-2 flex-col">
        <p className="bg-sky-blue-900 rounded-3xl px-4 py-1 text-white text-xs ">
          {hour.condition.text}
        </p>
        <p className="bg-sky-blue-300 rounded-3xl px-4 py-1 text-white text-xs ">
          { dateTransform({ date: hour.time, format: 'hh:mm A' })}
        </p>
      </div>

    </div>
  )
}

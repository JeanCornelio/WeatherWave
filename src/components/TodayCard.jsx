import { useContext } from 'react'
import { Condition } from './Condition'
import { GlobalStateContext } from '../context/GlobalStateProvider'
import { dateTransform } from '../helper'

export const TodayCard = ({ dayData, date, handleDay, currentDay }) => {
  const { state } = useContext(GlobalStateContext)
  const { temp } = state
  const { day, hour, date_epoch: dateEpoch } = dayData
  const currentDate = dateTransform({ date, format: 'dddd' })

  return (
    <div className={`${dateEpoch === currentDay ? ' ring ring-yellow-400' : 'ring-transparent'}  bg-white shadow-md  placeholder: p-4  rounded-3xl flex flex-wrap items-start px-8 transition ease-linear cursor-pointer focus:outline-none hover:ring hover:ring-yellow-400`} onClick={() => handleDay({ hour, id: dateEpoch, date: currentDate, day })}>
      <div className="flex flex-col items-start gap-4 " >
        <p className="bg-sky-blue-500 rounded-3xl px-4 py-1 mb-3 text-white">
          {currentDate}
        </p>
        <Condition condition={day.condition} showTextCondition={true} />
      </div>
      <div className=" flex flex-col gap-4 mx-auto">
        <div className="flex items-center gap-3">
          <span className="icon-[circum--temp-high] text-sky-blue-600 text-lg" />
          {day[`avgtemp_${temp}`]}°<span className="uppercase ">{temp}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="icon-[mdi--weather-windy] text-sky-blue-600" />
          <p>Wind {day.maxwind_kph} km/h</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="icon-[bi--moisture] text-sky-blue-600" />
          <p>Humitidy {day.avghumidity} %</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="icon-[cil--rain] text-sky-blue-600" />
          <p>Rain {day.totalprecip_in} %</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="icon-[mdi--weather-windy] text-sky-blue-600" />
          <p>Humitidy {day.avghumidity} %</p>
        </div>
      </div>
    </div>
  )
}

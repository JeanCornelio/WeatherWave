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
    <div className={`${dateEpoch === currentDay ? ' ring ring-yellow-400' : 'ring-transparent'} dark:bg-slate-900 border dark:border-slate-600 bg-white shadow-md  placeholder: p-4  rounded-3xl flex flex-col lg:flex-row   gap-4 md:px-8 transition ease-linear cursor-pointer focus:outline-none hover:ring hover:ring-yellow-400`} onClick={() => handleDay({ hour, id: dateEpoch, date: currentDate, day })}>
      <div className="flex flex-col items-start gap-4 w-full md:w-auto" >
        <p className="bg-sky-blue-500 dark:bg-sky-blue-900 rounded-3xl px-4 py-1 mb-3 text-white ">
          {currentDate}
        </p>
        <Condition condition={day.condition} showTextCondition={true} />
      </div>
      <div className=" flex flex-col gap-4 mx-auto my-4 md:mt-0  ">
        <div className="flex items-center gap-3 text-md dark:text-white">
          <span className="icon-[circum--temp-high] text-sky-blue-600 dark:text-sky-blue-400 text-xl" />
          {day[`avgtemp_${temp}`]}°<span className="uppercase  " >{temp}</span>
        </div>
        <div className="flex items-center gap-3 text-md">
          <span className="icon-[mdi--weather-windy] text-sky-blue-600 dark:text-sky-blue-400  text-lg" />
          <p className='dark:text-white'>Wind {day.maxwind_kph} km/h</p>
        </div>
        <div className="flex items-center gap-3 text-md">
          <span className="icon-[bi--moisture] text-sky-blue-600 dark:text-sky-blue-400  text-lg" />
          <p className='dark:text-white'>Humitidy {day.avghumidity} %</p>
        </div>
        <div className="flex items-center gap-3 text-md">
          <span className="icon-[cil--rain] text-sky-blue-600 dark:text-sky-blue-400  text-lg" />
          <p className='dark:text-white'>Rain {day.totalprecip_in} %</p>
        </div>
        <div className="flex items-center gap-3 text-md">
          <span className="icon-[mdi--weather-windy] text-sky-blue-600 dark:text-sky-blue-400  text-lg " />
          <p className='dark:text-white'>Humitidy {day.avghumidity} %</p>
        </div>
      </div>
    </div>
  )
}

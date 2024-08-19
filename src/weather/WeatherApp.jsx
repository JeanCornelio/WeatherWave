import { Nav, Footer } from '../ui'
import {
  ChartLine,
  Condition,
  Tab,
  TodayCard,
  WeeklyCard
} from '../components'
import { SwiperSlide } from 'swiper/react'
import { SwiperComponent } from '../components/SwiperComponent'
import { useTab } from '../hooks/useTap'
import { dateTransform } from '../helper'
import { useDay } from '../hooks/useDay'

const initialTabs = [
  {
    name: '3-day forecast',
    id: 1,
    active: true
  }
]

export const WeatherApp = () => {
  const { tab, handleTab, tabs } = useTab({ tabs: initialTabs })
  const {
    handleDay,
    current,
    forecast,
    temp,
    currentDayHourData,
    currentDay,
    location,
    recentSearch
  } = useDay()

  return (
    <div className=" md:px-0 flex flex-col justify-between  h-screen bg-sky-blue-300 dark:bg-slate-900">
      <Nav />
      <main className=" flex justify-center items-center flex-col gap-5 ">
        <section className='w-full container px-5'>
        <div
          id="hero"
          className="  flex flex-col md:flex-row gap-3   md:items-center rounded-2xl w-full justify-between p-5 md:p-10  bg-sky-blue-800 dark:bg-slate-800 "
        >
          <div className="flex flex-col   md:w-[500px] ">
            <span className="text-3xl md:text-5xl font-extrabold  text-white mb-2">
              {location.name}
            </span>
            <div className="  text-white mb-3  md:mb-12 md:text-xl ">
              <span className="me-1">{location.region},</span>
              <span>{location.country}</span>
            </div>
            <div className="flex flex-wrap justify-between text-sm md:text-base text-white  mb-6">
              <p>
                {dateTransform({
                  date: current.last_updated,
                  format: 'dddd DD MMMM YY'
                })}
              </p>
              <p>
                <span className="font-bold">Update As Of</span>{' '}
                {dateTransform({
                  date: current.last_updated_epoch,
                  format: 'hh:mm A'
                })}
              </p>
            </div>

            <div className=" bg-white dark:bg-slate-900  rounded-2xl grid grid-cols-1  sm:grid-cols-2 md:w-full gap-4 text-dark  p-5 md:p-8  dark:text-white text-sky-blue-600 ">
              <div className="flex  gap-4 items-center ">
                <div className="bg-sky-blue-600 dark:bg-sky-blue-900 flex p-2 md:text-2xl rounded-md">
                  <span className="icon-[mdi--weather-windy] text-white " />
                </div>
                <p className="text-sm md:text-base">
                  Wind {current.wind_kph}km/h
                </p>
              </div>
              <div className="flex gap-4 items-center ">
                <div className="bg-sky-blue-600 dark:bg-sky-blue-900  flex p-2 md:text-2xl rounded-md">
                  <span className="icon-[bi--moisture] text-white" />
                </div>
                <p className="text-sm md:text-base">
                  Humidity {current.humidity} %
                </p>
              </div>
              <div className="flex gap-4 items-center ">
                <div className="bg-sky-blue-600 dark:bg-sky-blue-900  flex p-2 md:text-2xl rounded-md">
                  <span className="icon-[cil--rain] text-white" />
                </div>
                <p className="text-sm md:text-base">
                  Rain {current.precip_mm} %
                </p>
              </div>
              <div className="flex gap-4 items-center ">
                <div className="bg-sky-blue-600 dark:bg-sky-blue-900  flex p-2 md:text-2xl rounded-md">
                  <span className="icon-[bi--clouds] text-white" />
                </div>
                <p className="text-sm md:text-base">Cloud {current.cloud} %</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900  shadow-md p-4 md:w-56 h-[21rem] rounded-3xl flex flex-col items-baseline gap-4   px-3">
            <p className="bg-sky-blue-500 dark:bg-sky-blue-900 rounded-3xl px-4 py-1 mb-3 text-white ">
              {' '}
              Today
            </p>
            <Condition condition={current.condition} showTextCondition={true} />
            <h1 className="text-5xl font-bold text-sky-blue-600 dark:text-sky-blue-400 self-center ">
              {current[`temp_${temp}`]}°
              <span className="uppercase">{temp}</span>
            </h1>
          </div>
        </div>
        </section>

        {currentDayHourData && (
          <section id="chart" className="container px-5">
            <ChartLine currentDayData={currentDayHourData} />
          </section>
        )}

        <section id="pronostic_weather" className="container  px-5">
          <Tab tabs={tabs} handleTab={handleTab}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {tab === 1 &&
                forecast.forecastday.map((day) => (
                  <TodayCard
                    key={day.date_epoch}
                    dayData={day}
                    date={day.date}
                    handleDay={handleDay}
                    currentDay={currentDay}
                  />
                ))}
            </div>

            {tab === 2 && (
              <WeeklyCard
                customClass={
                  'rounded-[9999px] hover:bg-sky-blue-500 hover:text-white'
                }
              />
            )}
          </Tab>
        </section>

        <section
          id="recent-weather"
          className="  bg-sky-blue-800 dark:bg-slate-800  w-full   flex justify-center  "
        >
          <div className="container grid grid-cols-4 items-center justify-center py-3 px-5 md:py-8 gap-10">
            <div className=" col-span-4 xl:col-span-1  ">
              <div className="text-white text-3xl md:text-5xl font-bold  ">
                <p>Recent Search</p>
                <p>Weather</p>
              </div>
              <p className="mt-4 text text-white/50 leading-loose">
                Explore your recent weather lookups and quickly access the most
                up-to-date information for the locations you've searched.
              </p>
            </div>
            <div className=" flex w-full gap-14 overflow-x-auto  col-span-4 xl:col-span-3">
              {recentSearch.length < 5 &&
                recentSearch.map((location) => (
                  <WeeklyCard key={location.localtime_epoch} {...location} />
                ))}

              {recentSearch.length >= 5 && (
                <SwiperComponent>
                  {recentSearch.map((location) => (
                    <SwiperSlide key={location.localtime_epoch}>
                      <WeeklyCard {...location} />
                    </SwiperSlide>
                  ))}
                </SwiperComponent>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

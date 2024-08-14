import { Header } from '../ui'
import {
  ChartLine,
  Condition,
  Footer,
  SearchBar,
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
  /* {
    name: 'Weekly',
    id: 2,
    active: false
  } */
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
    <>
      <Header />
      <main className=" flex justify-center items-center flex-col gap-5 bg-sky-blue-300">
        <div
          id="hero"
          className="  rounded-2xl w-full container flex items-center justify-between p-10  bg-sky-blue-800"
        >
          <div className="flex flex-col   w-[500px] ">
            <span className="text-5xl font-extrabold  text-white mb-2">
              {location.name}
            </span>
            <div className="  text-white  mb-12 text-xl ">
              <span className="me-1">{location.region},</span>
              <span>{location.country}</span>
            </div>
            <div className="flex justify-between text-white  mb-6">
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

            <div className=" bg-white rounded-2xl grid grid-cols-2 gap-4 text-dark p-8  ">
              <div className="flex gap-4 items-center text-sky-blue-600">
                <div className="bg-sky-blue-600 flex p-2 text-2xl rounded-md">
                  <span className="icon-[mdi--weather-windy] text-white" />
                </div>
                <p>Wind {current.wind_kph}km/h</p>
              </div>
              <div className="flex gap-4 items-center text-sky-blue-600">
                <div className="bg-sky-blue-600 flex p-2 text-2xl rounded-md">
                  <span className="icon-[bi--moisture] text-white" />
                </div>
                <p>Humidity {current.humidity} %</p>
              </div>
              <div className="flex gap-4 items-center text-sky-blue-600">
                <div className="bg-sky-blue-600 flex p-2 text-2xl rounded-md">
                  <span className="icon-[cil--rain] text-white" />
                </div>
                <p>Rain {current.precip_mm} %</p>
              </div>
              <div className="flex gap-4 items-center text-sky-blue-600">
                <div className="bg-sky-blue-600 flex p-2 text-2xl rounded-md">
                  <span className="icon-[bi--clouds] text-white" />
                </div>
                <p>Cloud {current.cloud} %</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md p-4 w-56 h-80 rounded-3xl flex flex-col items-baseline gap-4   px-3">
            <p className="bg-sky-blue-500 rounded-3xl px-4 py-1 mb-3 text-white ">
              {' '}
              Today
            </p>
            <Condition condition={current.condition} showTextCondition={true} />
            <h1 className="text-5xl font-bold text-sky-blue-600 self-center ">
            {current[`temp_${temp}`]}°
              <span className="uppercase">{temp}</span>
            </h1>
          </div>
        </div>

        {currentDayHourData && (
          <section id="chart" className="container ">
            <ChartLine currentDayData={currentDayHourData} />
          </section>
        )}

        <section id="pronostic_weather" className="container">
          <Tab tabs={tabs} handleTab={handleTab}>
            <div className="grid grid-cols-3 gap-3">
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
          className="  bg-sky-blue-800  w-full   flex justify-center"
        >
          <div className="container grid grid-cols-4 items-center justify-center py-8 gap-10">
            <div className=" col-span-4 xl:col-span-1  ">
              <div className="text-white text-2xl font-bold  ">
                <h1>Recent Search</h1>
                <h1>Weather</h1>
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
                    <SwiperSlide>
                      <WeeklyCard
                        key={location.localtime_epoch}
                        {...location}
                      />
                    </SwiperSlide>
                  ))}
                </SwiperComponent>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

import { Header } from '../ui'
import { SearchBar, Tab, TodayCard, WeeklyCard } from '../components'
import { useContext, useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import { SwiperComponent } from '../components/SwiperComponent'
import { useTab } from '../hooks/useTap'
import { GlobalStateContext } from '../context/GlobalStateProvider'
export const WeatherApp = () => {
  const { tab, handleTab, tabs } = useTab()
  const { state } = useContext(GlobalStateContext)
  const { location, current } = state.current

  return (
    <div >
    <Header />

    <main className=" flex justify-center items-center flex-col gap-5  ">
      <div
        id="hero"
        className="h-[450px]  rounded-2xl w-full container flex items-center justify-between px-10 bg-sky-blue-200"

      >
        <div className="flex flex-col   w-[500px] ">
          <span className="text-6xl font-extrabold  text-sky-blue-600 mb-2">{location.name}</span>
          <div className="  text-sky-blue-500/75 mb-12 text-xl ">
            <span className='me-1'>{location.region},</span>
            <span>{location.country}</span>
          </div>
          <div className="flex justify-between text-sky-blue-600 mb-6">
            <p>{current.last_updated}</p>
            <p><span className='font-bold'>Update As Of</span> {current.last_updated_epoch}</p>
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
        <div className="bg-white shadow-md p-4 w-[240px] h-[360px] rounded-3xl flex flex-col items-baseline   px-3">
          <p className="bg-sky-blue-300 rounded-3xl px-4 py-1 text-white ">
            {' '}
            Today
          </p>
          <div className="partly_cloudy self-center">
            <div className="partly_cloudy__sun"></div>
            <div className="partly_cloudy__cloud"></div>
          </div>
          <h1 className="text-6xl font-bold text-sky-blue-600 self-center ">
            {current.temp_c}°C
            {/* {current.temp_f} */}
          </h1>
          <div className="flex justify-between self-center text-xl font-bold gap-4 mt-auto text-sky-blue-600">
            <p>23 c</p>
            <p>-31 c</p>
          </div>
        </div>
      </div>
      <section id="chart" className="container ">
        <h1>chart weather</h1>
      </section>
      <section id="pronostic_weather" className="container">
        <Tab tabs={tabs} handleTab={handleTab}>
          {tab === 1 && <TodayCard />}
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
        className="  bg-sky-blue-200  w-full   flex justify-center"
      >
        <div className='container grid grid-cols-4 items-center justify-center py-8 gap-3 '>
        <div className=" col-span-4 xl:col-span-1  ">
          <div className="text-sky-blue-600 text-2xl font-bold  ">
            <h1>Recent Search</h1>
            <h1>Weather</h1>
          </div>
          <p className="mt-4 text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
            cursus quis.
          </p>
        </div>

        <div className=" flex w-full gap-5 overflow-x-auto  col-span-4 xl:col-span-3">
          <SwiperComponent>
            <SwiperSlide>
              <WeeklyCard customClass={'rounded-[40px]'} />
            </SwiperSlide>
            <SwiperSlide>
              <WeeklyCard customClass={'rounded-[40px]'} />
            </SwiperSlide>
            <SwiperSlide>
              <WeeklyCard customClass={'rounded-[40px]'} />
            </SwiperSlide>
            <SwiperSlide>
              <WeeklyCard customClass={'rounded-[40px]'} />
            </SwiperSlide>
            <SwiperSlide>
              <WeeklyCard customClass={'rounded-[40px]'} />
            </SwiperSlide>
            <SwiperSlide>
              <WeeklyCard customClass={'rounded-[40px]'} />
            </SwiperSlide>
            <SwiperSlide>
              <WeeklyCard customClass={'rounded-[40px]'} />
            </SwiperSlide>
            <SwiperSlide>
              <WeeklyCard customClass={'rounded-[40px]'} />
            </SwiperSlide>
            <SwiperSlide>
              <WeeklyCard customClass={'rounded-[40px]'} />
            </SwiperSlide>
            <SwiperSlide>
              <WeeklyCard customClass={'rounded-[40px]'} />
            </SwiperSlide>
            <SwiperSlide>
              <WeeklyCard customClass={'rounded-[40px]'} />
            </SwiperSlide>
          </SwiperComponent>
        </div>
        </div>

      </section>
    </main>
  </div>
  )
}

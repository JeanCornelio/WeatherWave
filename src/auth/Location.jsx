import React, { useState } from 'react'
import { SearchBar } from '../components'
import { Day, Night } from '../ui'

export const Location = () => {
  const [day, setDay] = useState(true)

  const handleDay = (value) => {
    setDay(value)
  }
  return (
    <section
      className="flex justify-center items-center h-screen relative transition px-5 md:px-0 "
      style={{
        backgroundImage: !day &&

          'linear-gradient(to top, #09203f 0%, #537895 100%)'
      }}
    >
      <div className="w-[500px] h-[600px]   rounded-lg     z-40">
        <h1 className="text-center text-white font-bold text-2xl md:text-4xl ">
          WeatherWave
        </h1>
        <SearchBar></SearchBar>
      </div>

      <div className="cloud-content ">
        {/*  night */}
        {!day && <Night handleDay={handleDay} />}
        {/* //day */}
        {day && <Day handleDay={handleDay} />}
      </div>
    </section>
  )
}

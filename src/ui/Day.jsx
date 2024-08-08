import React from 'react'

export const Day = ({ handleDay }) => {
  return (
    <>
      <div
        className="partly_cloudy   absolute top-3 left-6 cursor-pointer "
        onClick={() => handleDay(false)}
      >
        <div className="partly_cloudy__sun w-14 h-14 md:w-52 md:h-52 z-[5]"></div>
      </div>

      <div className="cloud-1 cloud-block ">
        <div className="cloud"></div>
      </div>
      <div className="cloud-2 cloud-block  ">
        <div className="cloud "></div>
      </div>
      <div className="cloud-3 cloud-block ">
        <div className="cloud"></div>
      </div>
      <div className="cloud-4 cloud-block ">
        <div className="cloud"></div>
      </div>
      <div className="cloud-5 cloud-block ">
        <div className="cloud"></div>
      </div>
      <div className="cloud-6 cloud-block ">
        <div className="cloud"></div>
      </div>
      <div className="cloud-7 cloud-block ">
        <div className="cloud"></div>
      </div>
    </>
  )
}

import React from 'react'

export const Night = ({ handleDay }) => {
  return (
    <>
      <div
        className=" absolute  top-5 left-8 md:top-8 md:left-10 cursor-pointer"
        onClick={() => handleDay(true)}
      >
        <div className="moon w-10 h-10  before:hidden after:hidden md:w-44 md:h-44 md:after:block  md:before:block"></div>
      </div>
      <div className="starts"></div>
      <div className="shooting-star shooting-star-1"></div>
      <div className="shooting-star shooting-star-2"></div>
    </>
  )
}

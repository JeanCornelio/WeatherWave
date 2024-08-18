import { useContext } from 'react'
import { GlobalStateContext } from '../context/GlobalStateProvider'

export const Day = () => {

  const {  setDarkMode} = useContext(GlobalStateContext)
  return (
    <>
      <div
        className="partly_cloudy   absolute top-0 left-0 md:top-3 md:left-6 cursor-pointer "
        onClick={() => setDarkMode(true)}
      >
        <div className="partly_cloudy__sun w-40 h-40 md:w-52 md:h-52 z-[5]"></div>
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

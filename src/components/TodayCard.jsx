import { useContext } from "react";
import { Condition } from "./Condition";
import { GlobalStateContext } from "../context/GlobalStateProvider";
import { dateTransform } from "../helper";

export const TodayCard = ({ dayData, date, handleDayHour }) => {
  const { state } = useContext(GlobalStateContext);
  const { temp } = state;
  const {day, hour} = dayData

  
  return (
    <div className="bg-white shadow-md  placeholder: p-4  rounded-3xl flex flex-wrap items-start px-8 transition ease-linear cursor-pointer   focus:outline-none hover:ring hover:ring-yellow-400" onClick={() => handleDayHour(hour)}>
      <div className="flex flex-col items-start gap-4 " >
        <p className="bg-sky-blue-500 rounded-3xl px-4 py-1 mb-3 text-white">
          {dateTransform({ date: date, format: "dddd" })}
        </p>
        <Condition condition={day.condition} showTextCondition={true} />
      </div>
      <div className=" flex flex-col gap-4 mx-auto">
        <div className="flex items-center gap-3">
          <span className="icon-[circum--temp-high] text-sky-blue-600" />
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
  );
};

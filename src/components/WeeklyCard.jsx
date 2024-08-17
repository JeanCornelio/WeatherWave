import { useContext } from "react";
import { Condition } from "./Condition";
import { GlobalStateContext } from "../context/GlobalStateProvider";

export const WeeklyCard = (props) => {
  const { state, updateCurrentData } = useContext(GlobalStateContext);
  const { temp } = state;
  const { current, location } = props;

  const setCurrentDay = () => {
    updateCurrentData(props);
  };

  return (
    <div
      onClick={setCurrentDay}
      className="bg-white shadow-md   p-4 w-full  md:w-48 h-72 cursor-pointer  flex flex-col justify-between items-center  px-3 transition ease-linear rounded-3xl dark:bg-slate-900  "
    >
      <Condition condition={current.condition} />
      <div className="flex flex-col gap-2">
      <p className="text-sm text-center font-semibold text-sky-blue-600 dark:text-white uppercase ">
        {location.name}
      </p>
      <p className="text-sm text-center font-semibold text-gray-500 ">
        {location.country}
      </p>
      </div>
     

      <h1 className="text-4xl font-extrabold text-sky-blue-600 dark:text-sky-blue-400">
        {" "}
        {current[`temp_${temp}`]}°<span className="uppercase">{temp}</span>
      </h1>
    </div>
  );
};

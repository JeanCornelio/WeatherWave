import { useContext } from "react";
import { GlobalStateContext } from "../context/GlobalStateProvider";

export const Night = () => {
  const { setDarkMode } = useContext(GlobalStateContext);
  return (
    <>
      <div
        className=" absolute  top-4 left-4 md:top-8 md:left-10 cursor-pointer"
        onClick={() => setDarkMode(false)}
      >
        <div className="moon w-32 h-32  before:hidden after:hidden md:w-44 md:h-44 md:after:block  md:before:block"></div>
      </div>
      <div className="starts"></div>
      <div className="shooting-star shooting-star-1"></div>
      <div className="shooting-star shooting-star-2"></div>
    </>
  );
};

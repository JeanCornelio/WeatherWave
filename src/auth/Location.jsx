import { useContext } from "react";
import { SearchBar } from "../components";
import { Day, Night } from "../ui";
import { GlobalStateContext } from "../context/GlobalStateProvider";

export const Location = () => {
  const { state } = useContext(GlobalStateContext);

  return (
    <section
      className="flex justify-center items-center h-screen relative transition px-5 md:px-0"
      style={{
        backgroundImage:
          state.darkMode && "linear-gradient(to top, #09203f 0%, #537895 100%)",
      }}
    >
      <div className="w-[500px] h-[600px]   rounded-lg z-40">
        <h1 className="text-center text-white font-bold text-2xl md:text-4xl mb-4">
          WeatherWave
        </h1>
        <SearchBar></SearchBar>
      </div>

      <div className="cloud-content ">
        x{state.darkMode ? <Night /> : <Day />}
      </div>
    </section>
  );
};

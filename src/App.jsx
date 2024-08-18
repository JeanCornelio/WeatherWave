import { useContext } from "react";
import "./App.css";
import { Location } from "./auth/Location";
import { WeatherApp } from "./weather/WeatherApp";
import { GlobalStateContext } from "./context/GlobalStateProvider";


function App() {
  const { state } = useContext(GlobalStateContext);

  return <>{state.current ? <WeatherApp /> : <Location />}</>;
}

export default App;

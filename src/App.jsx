import "./App.css";
import { Header } from "./ui";
import { Tab, TodayCard, WeeklyCard } from "./components";
import { useState } from "react";

const tabs = [
  {
    name: "Today",
    id: 1,
    active: true,
  },
  {
    name: "Weekly",
    id: 2,
    active: false,
  },
];

function App() {
  const [tab, setTab] = useState(1);

  const handleTab = (tabActive) => {
    console.log(tabActive);
    setTab(tabActive);
  };

  return (
    <div className="">
      <Header />

      <main className=" flex justify-center items-center flex-col gap-5 mb-10">
        <div
          id="hero"
          className="h-[500px] bg-sky-blue-400 rounded-2xl w-full container flex items-center justify-between px-16"
        >
          <div className="flex flex-col gap-4 justify-start   w-[400px] ">
            <h1 className="text-5xl font-bold  text-white">Santo Domingo</h1>
            <div className="flex justify-between text-white ">
              <p>Monday, May 23</p>
              <p>Update As Of 2:45 PM</p>
            </div>
            
            <div className=" bg-white rounded-2xl grid grid-cols-2 gap-4 text-dark p-8  ">
              <div className="flex gap-4 items-center">
                <div className="bg-sky-blue-600 flex p-2 text-2xl rounded-md">
                  <span className="icon-[mdi--weather-windy] text-white" />
                </div>
                <p>Wind 3km/h</p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="bg-sky-blue-600 flex p-2 text-2xl rounded-md">
                  <span className="icon-[mdi--weather-windy] text-white" />
                </div>
                <p>Wind 3km/h</p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="bg-sky-blue-600 flex p-2 text-2xl rounded-md">
                  <span className="icon-[cil--rain] text-white" />
                </div>
                <p>Rain 78%</p>
              </div>
              <div className="flex gap-4 items-center">
                <div className="bg-sky-blue-600 flex p-2 text-2xl rounded-md">
                  <span className="icon-[cil--rain] text-white" />
                </div>
                <p>Rain 78%</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md p-4 w-[240px] h-[360px] rounded-3xl flex flex-col items-baseline gap-10  px-3">
            <p className="bg-sky-blue-300 rounded-3xl px-4 py-1 text-white ">
              {" "}
              Today
            </p>
              <div className="partly_cloudy self-center">
          <div className="partly_cloudy__sun"></div>
          <div className="partly_cloudy__cloud"></div>
        </div>
            <h1 className="text-5xl font-bold text-sky-blue-600 self-center ">
              23 C
            </h1>
            <div className="flex justify-between self-center text-xl font-bold gap-4 mt-auto">
              <p>23 c</p>
              <p>-31 c</p>
            </div>
          </div>
        </div>
        <Tab customClass="container " tabs={tabs} handleTab={handleTab}>
          {tab === 1 && <TodayCard/>}
          {tab === 2 && <WeeklyCard/>}
        </Tab>
      </main>
    </div>
  );
}

export default App;

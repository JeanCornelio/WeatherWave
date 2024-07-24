export const TodayCard = () => {
  return (
    <div className="bg-white shadow-md hover:bg-sky-blue-500 hover:text-white  placeholder: p-4 w-[300px]  rounded-3xl flex flex-col items-center gap-4  px-3 transition ease-linear">
      <div className="partly_cloudy">
        <div className="partly_cloudy__sun"></div>
        <div className="partly_cloudy__cloud"></div>
      </div>
      <div className="flex gap-3">
        <p className="bg-sky-blue-900 rounded-3xl px-4 py-1 text-white text-md ">
          Sun
        </p>
        <p className="bg-sky-blue-300 rounded-3xl px-4 py-1 text-white text-md ">
          4:00 PM
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <h1 className="text-5xl font-bold text-sky-blue-900 ">
          23
        </h1>
        <h3 className="text-3xl font-bold text-sky-blue-300 self-center">23</h3>
      </div>

      <div className="flex gap-3">
        <p>45km/h</p>
        <p>70%</p>
        <p>Light rain</p>
      </div>
    </div>
  );
};

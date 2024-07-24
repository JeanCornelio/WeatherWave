

export const WeeklyCard = () => {
  return (
    <div className="bg-white shadow-md hover:bg-sky-blue-500 hover:text-white  placeholder: p-4 w-[180px]  rounded-[9999px] py-[50px] flex flex-col items-center gap-4  px-3 transition ease-linear">
  <div className="thundery">
	<div className="thundery__cloud"></div>
	<div className="thundery__rain"></div>
</div>
<p className=" font-semibold">Light rain</p>
    <h1 className="text-5xl font-bold text-sky-blue-900 ">
        23
      </h1>
    
  </div>
  )
}

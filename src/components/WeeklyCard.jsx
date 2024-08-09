export const WeeklyCard = ({ customClass }) => {
  return (
    <div
      className={
        'bg-white shadow-md   p-4 w-48 h-80  flex flex-col items-center gap-10  px-3 transition ease-linear ' +
        customClass
      }
    >
      <div className="thundery">
        <div className="thundery__cloud"></div>
        <div className="thundery__rain"></div>
      </div>
      <p className=" font-semibold">Light rain</p>
      <h1 className="text-5xl font-bold text-sky-blue-900 ">23</h1>
    </div>
  )
}

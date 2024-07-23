



export const Header = () => {
  return (
    <>
        <div className="container flex justify-end items-center  mx-auto py-5 text-gray-700 ">
   {/*      <div className="mx-auto">
          <span className="font-bold">Santo11:50 pm</span>     
        </div> */}
        <div className="flex gap-3">
        <button className="p-1 flex rounded-md   hover:bg-slate-100  ">
        <span className="icon-[carbon--temperature-fahrenheit] text-2xl  " />
        {/* <span className="icon-[carbon--temperature-celsius] text-2xl  " /> */}
        </button>
        <button className=" p-1 flex rounded-md  hover:bg-slate-100 ">
        <span className="icon-[material-symbols--dark-mode-outline] text-2xl  " />
        </button>
        <button className=" p-1 flex rounded-md border px-5 items-center font-semibold gap-1 hover:bg-slate-100 ">
            Location
            <span className="icon-[pajamas--location] " />
        </button>
        </div>
       
        </div>
    </>
  )
}

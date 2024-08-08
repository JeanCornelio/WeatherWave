import { SearchBar } from '../components'

export const Header = () => {
  return (
    <>
      <div className="container flex justify-end items-center  mx-auto py-5 text-gray-700">
        {/*      <div className="mx-auto">
          <span className="font-bold">Santo11:50 pm</span>
        </div> */}
        <div className="flex  gap-2 w-2/3 justify-end ">
          <button className="p-2.5 ms-2 flex rounded-md text-sky-blue-900 bg-sky-blue-200 hover:bg-sky-blue-600 hover:text-white  transition ">
            <span className="icon-[carbon--temperature-fahrenheit] text-2xl  " />
            {/* <span className="icon-[carbon--temperature-celsius] text-2xl  " /> */}
          </button>
          <button className=" p-2.5 flex rounded-md bg-sky-blue-200 text-sky-blue-900 hover:bg-sky-blue-600 hover:text-white  transition ">
            <span className="icon-[material-symbols--dark-mode-outline] text-2xl  " />
          </button>
          <div className='w-1/2'>

          <SearchBar/>
          </div>
        </div>
      </div>
    </>
  )
}

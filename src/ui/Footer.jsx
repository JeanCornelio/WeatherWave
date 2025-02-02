export const Footer = () => {
  return (
    <footer className="  dark:bg-[#0F172A] flex  w-full   h-12 mt-auto px-5 ">
      <div className="w-full container mx-auto justify-center sm:justify-end flex">
        <div className="flex  items-center justify-between w-full py-4  ">
          <a
            href="https://github.com/JeanCornelio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 cursor-pointer text-sky-blue-900 dark:text-white "
          >
            <span className="icon-[bi--github]  " />
            <div className="flex items-center ">
              <span className="text-xs font-medium ">GitHub</span>
              <span className="icon-[material-symbols-light--arrow-outward-rounded] text-sm" />
            </div>
          </a>
          <aside className="flex flex-wrap items-center justify-end w-full   sm:mb-0 dark:text-gray-400">
            <span className="text-xs  text-sky-blue-900 dark:text-white  font-medium flex items-center gap-1">
              <span className="icon-[tabler--heart] text-red-600 " />
              <span>Power By: Jean Cornelio</span>
            </span>
          </aside>
        </div>
      </div>
    </footer>
  )
}

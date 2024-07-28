import { useState } from "react";

export const Tab = ({ customClass, tabs, children, handleTab }) => {
  const [activeTab, setActiveTab] = useState(1)

  const handleActiveTab = (idTab) =>{
    setActiveTab(idTab)
    handleTab(idTab)
  }

  return (
    <>
      <div
        className={`text-sm font-medium text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700 ${customClass}`}
      >
        <ul className="flex flex-wrap -mb-px gap-3">
          {tabs.map((tab) => (
            <li className="me-2" key={tab.id}>
              <button
              onClick={() => handleActiveTab(tab.id)}
                className={`${
                    tab.id === activeTab  && "  border-b-4 border-sky-blue-600 text-sky-blue-600 "
                } inline-block p-4 rounded-t-lg text-md pb-2 transition`}
              >
                {tab.name}
              </button>
            </li>
          ))}
        </ul>
        <div className="w-full my-5">{children}</div>
      </div>
    </>
  );
};
 
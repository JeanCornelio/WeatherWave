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
        <ul className="flex flex-wrap -mb-px">
          {tabs.map((tab) => (
            <li className="me-2" key={tab.id}>
              <button
              onClick={() => handleActiveTab(tab.id)}
                className={`${
                    tab.id === activeTab  && "border-sky-blue-600 text-sky-blue-600"
                } inline-block p-4 border-b-2 border-transparent rounded-t-lg text-md  `}
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

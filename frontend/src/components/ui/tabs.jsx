import React, { useState } from "react";

export function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(Object.keys(tabs)[0]);

  return (
    <div className="w-full">
      <div className="flex space-x-4 mb-6 border-b border-sage">
        {Object.keys(tabs).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-lg font-semibold ${
              activeTab === tab
                ? "border-b-2 border-soft-olive text-soft-olive"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>{tabs[activeTab]}</div>
    </div>
  );
}

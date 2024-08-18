"use client";

import { useState } from "react";
import { GoalTypes } from "@/utils/constants";

export default function GoalTypeDropdown({ selectedType, setSelectedType }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectType = (type) => {
    setSelectedType(type);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {selectedType || "Select Goal Type"}
        <span className="ml-2">
          <svg
            viewBox="0 0 20 20"
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <path
              fill="currentColor"
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </span>
      </button>
      {isOpen && (
        <ul
          className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          {GoalTypes.map((type) => (
            <li
              key={type}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelectType(type)}
            >
              {type}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
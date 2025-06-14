"use client";

import React, { useEffect, useState } from "react";
import Paragraph from "./Paragraph";

interface CustomDropdownProps {
  mainLabel?: string;
  label?: string;
  data?: any[];
  defaultSelected?: any;
  selectedId?: number;
  onSelect?: (selectedItem: any) => void;
  className?: string;
  name?: string;
  disabled?: boolean;
}

export const CustomDropdown = ({
  label = "Select an Option",
  data,
  defaultSelected,
  selectedId,
  onSelect,
  mainLabel,
  className,
  name,
  disabled = false,
}: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<any | undefined>(defaultSelected);

  // Update selected from selectedId
  useEffect(() => {
    if (data && selectedId !== undefined) {
      const found = data.find((item) => item.id === selectedId);
      if (found) {
        setSelected(found);
      }
    }
  }, [selectedId, data]);

  const handleSelect = (item: any) => {
    setSelected(item);
    setIsOpen(false);
    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    <div className="relative w-full mx-auto">
      <Paragraph className="block mb-2 text-sm text-gray-800 font-medium">
        {mainLabel}
      </Paragraph>
      <button
        type="button"
        disabled={disabled}
        className={`${className} w-full flex items-center justify-between p-3 border border-gray-300 rounded-lg bg-white shadow-sm transition-colors duration-150 ease-in-out ${
          isOpen ? "ring-2 ring-blue-500 border-blue-500" : ""
        } ${
          disabled
            ? "cursor-not-allowed opacity-50"
            : "hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        }`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="text-gray-700">
          {selected ? selected.name : label}
        </span>
        <svg
          className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && !disabled && (
        <div
          className="absolute z-[9999] w-full mt-1 p-1 border border-gray-200 rounded-lg bg-white shadow-lg transition-opacity duration-100 ease-out overflow-auto"
          role="listbox"
        >
          {data && data.length > 0 ? (
            data.map((item) => (
              <button
                type="button"
                className={`w-full text-left p-2 my-0.5 rounded-md hover:bg-blue-500 hover:text-white focus:bg-blue-500 focus:text-white focus:outline-none transition-colors duration-150 ease-in-out ${
                  selected?.id === item.id
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "text-gray-800"
                }`}
                key={item.id}
                onClick={() => handleSelect(item)}
                role="option"
                aria-selected={selected?.id === item.id}
              >
                {item.name}
              </button>
            ))
          ) : (
            <p className="p-2 text-gray-500 text-sm">No options.</p>
          )}
        </div>
      )}
    </div>
  );
};

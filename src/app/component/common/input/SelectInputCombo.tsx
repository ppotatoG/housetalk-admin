import React, { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

import RequiredMark from './RequiredMark';
import ToggleDisableButton from './ToggleDisableButton';

interface TypeOption {
  id: string;
  name: string;
}

interface SelectInputComboProps {
  label: string;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  selectedOption: TypeOption;
  setTypeOption: (option: TypeOption) => void;
  typeOptions: TypeOption[];
  disabled?: boolean;
}

const SelectInputCombo: React.FC<SelectInputComboProps> = ({
  label,
  searchTerm,
  setSearchTerm,
  placeholder,
  required = false,
  disabled = false,
  selectedOption,
  setTypeOption,
  typeOptions,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(disabled);

  const handleDisableToggle = () => {
    if (!required) {
      setSearchTerm('');
      setIsDisabled(prev => !prev);
    }
  };

  return (
    <div className="flex items-center w-full">
      <div className="border border-gray-200 dark:border-gray-800 flex items-center w-1/2">
        <div className="relative w-1/3">
          <button
            className="relative bg-gray-200 dark:bg-gray-800 p-2 w-full text-left"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            disabled={isDisabled}
          >
            {selectedOption.name}
            {required && <RequiredMark required={required} />}
            <IoIosArrowUp
              className={`absolute top-1/2 right-2 transform -translate-y-1/2 transition-transform duration-200 ${
                !isOpen ? 'transform rotate-180' : ''
              }`}
            />
          </button>

          {isOpen && !isDisabled && (
            <div className="absolute mt-1 z-10 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-transform transform duration-100 ease-out">
              <div className="py-1">
                {typeOptions.map(option => (
                  <button
                    key={option.id}
                    className={`text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ${
                      option.id === selectedOption.id ? 'font-bold' : ''
                    }`}
                    onClick={() => {
                      setTypeOption(option);
                      setIsOpen(false);
                    }}
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-grow items-center relative">
          <label htmlFor={label} className="w-full">
            <input
              className={`p-2 w-full ${
                isDisabled ? 'bg-gray-50 text-gray-300' : ''
              }`}
              type="text"
              id={label}
              value={searchTerm}
              placeholder={placeholder || undefined}
              onChange={e => setSearchTerm(e.target.value)}
              disabled={isDisabled}
              required={required}
            />
          </label>
          {!required && (
            <ToggleDisableButton
              required={required}
              handleDisableToggle={handleDisableToggle}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectInputCombo;

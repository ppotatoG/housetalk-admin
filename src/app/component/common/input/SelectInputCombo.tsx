import React, { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

interface TypeOption {
  id: string;
  name: string;
}

interface SelectInputComboProps {
  selectLabel: string;
  textLabel: string;
  textValue: string;
  setTextValue: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  selectedOption: TypeOption;
  setTypeOption: (option: TypeOption) => void;
  typeOptions: TypeOption[];
}

const SelectInputCombo: React.FC<SelectInputComboProps> = ({
  selectLabel,
  textLabel,
  textValue,
  setTextValue,
  placeholder,
  required,
  selectedOption,
  setTypeOption,
  typeOptions,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center w-full">
      <div className="border border-gray-200 dark:border-gray-800 flex items-center w-1/2">
        <div className="w-1/3 relative">
          <button
            className="bg-gray-200 dark:bg-gray-800 p-2 block w-full text-left flex items-center justify-between"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedOption.name}
            <IoIosArrowUp
              className={`transition-transform duration-200 ${
                !isOpen ? 'transform rotate-180' : ''
              }`}
            />
          </button>

          {isOpen && (
            <div className="absolute z-10 w-56 origin-top-right rounded-md bg-white shadow-lg focus:outline-none">
              <div className="py-1">
                {typeOptions.map(option => (
                  <button
                    key={option.id}
                    className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
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
        <div className="flex flex-grow items-center">
          <label htmlFor={textLabel}>
            <input
              className="p-2"
              type="text"
              id={textLabel}
              value={textValue}
              placeholder={placeholder || undefined}
              onChange={e => setTextValue(e.target.value)}
              {...(required ? { required: true } : {})}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default SelectInputCombo;

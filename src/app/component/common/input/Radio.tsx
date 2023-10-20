import React from 'react';

import RequiredMark from '@/component/common/input/RequiredMark';

interface TextProps {
  labelText: string;
  value: CheckData;
  setValue: (value: CheckData) => void;
  radioList: CheckData[];
  required?: boolean;
  className?: string;
}

const Radio: React.FC<TextProps> = ({
  labelText,
  value,
  setValue,
  radioList,
  required = false,
  className,
}) => {
  return (
    <div
      className={`relative border border-gray-200 dark:border-gray-800 flex items-center w-1/2 ${
        className && className
      }`}
    >
      <div className="bg-gray-200 dark:bg-gray-800 p-3 w-1/3">
        {labelText}
        {required && <RequiredMark required={required} />}
      </div>
      <div className="px-3 w-2/3 flex gap-8 items-center">
        {radioList.map(radio => {
          return (
            <label
              key={radio.id}
              className="relative flex items-center gap-2 cursor-pointer py-3"
              htmlFor={radio.id}
            >
              <input
                id={radio.id}
                name="type"
                type="radio"
                onChange={() => setValue(radio)}
                className="appearance-none rounded-full h-5 w-5 border border-indigo-950"
              />
              <span
                className={
                  value.id === radio.id
                    ? 'absolute left-1 flex items-center'
                    : 'hidden'
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 16 16"
                  fill="#1d1b4b"
                >
                  <circle cx="8" cy="8" r="6"></circle>
                </svg>
              </span>
              <span>{radio.label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Radio;

import React from 'react';

import { COLORS } from '@/constants';

interface TextProps {
  value: string;
  labelText: string;
  radioList: string[];
}

const ReadOnlyRadio: React.FC<TextProps> = ({
  value,
  labelText,
  radioList,
}) => {
  return (
    <div className="h-9 relative border border-gray-200 dark:border-gray-800 flex items-center">
      <div className="bg-gray-200 dark:bg-gray-800 h-full leading-9 px-2 w-1/3">
        {labelText}
      </div>
      <div className="px-3 w-2/3 flex gap-8 items-center">
        {radioList.map(radio => {
          return (
            <label
              key={radio}
              className="relative flex items-center gap-2 cursor-pointer py-3"
              htmlFor={radio}
            >
              <input
                id={radio}
                name="type"
                type="radio"
                readOnly
                checked={value === radio}
                className={`appearance-none rounded-full h-3 w-3 border ${
                  value === radio ? 'border-indigo-950' : 'border-gray-300'
                }`}
              />
              <span
                className={
                  value === radio
                    ? 'absolute h-3 w-3 flex justify-center items-center'
                    : 'hidden'
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-2 w-2"
                  viewBox="0 0 16 16"
                  fill={COLORS['indigo-950']}
                >
                  <circle cx="8" cy="8" r="6"></circle>
                </svg>
              </span>
              <span className={value === radio ? '' : 'text-gray-300'}>
                {radio}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default ReadOnlyRadio;

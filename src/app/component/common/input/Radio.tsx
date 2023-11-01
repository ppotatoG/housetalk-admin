import React from 'react';

import RequiredMark from '@/component/common/input/RequiredMark';
import { COLORS } from '@/constants';

interface TextProps {
  labelText: string;
  value: CheckData;
  setValue: (value: CheckData) => void;
  radioList: CheckData[];
  required?: boolean;
  className?: string;
  height?: number;
  titleWidthClass?: string;
}

const Radio: React.FC<TextProps> = ({
  labelText,
  value,
  setValue,
  radioList,
  required = false,
  className,
  height = 9,
  titleWidthClass,
}) => {
  return (
    <div
      className={`border border-gray-200 dark:border-gray-800 flex items-center w-1/2 ${
        className || ''
      } ${height && `h-${height}`}`}
    >
      <div
        className={`bg-gray-200 flex items-center h-full dark:bg-gray-800 px-2 ${
          titleWidthClass ? titleWidthClass : 'w-1/3'
        }`}
      >
        {labelText}
        {required && <RequiredMark required={required} />}
      </div>
      <div
        className={`px-2 flex gap-8 items-center h-full ${
          titleWidthClass ? 'w-full' : 'w-2/3'
        }`}
      >
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
                className="appearance-none rounded-full h-3 w-3 border border-indigo-950"
              />
              <span
                className={
                  value.id === radio.id
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
              <span>{radio.label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Radio;

import React from 'react';
import { TiDelete } from 'react-icons/ti';

import { TIME_TYPE_STRING } from '@/constants';
interface TimeInputProps {
  label: string;
  value: number;
  setValue: (value: number) => void;
  timeType: 'HOUR' | 'MINUTE' | 'SECOND';
}

const TimeInput: React.FC<TimeInputProps> = ({
  label,
  value,
  setValue,
  timeType,
}) => {
  const maxNumber = timeType === 'HOUR' ? 23 : 59;

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Math.min(maxNumber, Math.max(0, Number(e.target.value))));
  };

  const handleDelete = () => {
    setValue(0);
  };

  return (
    <div className="flex border border-gray-200">
      <label htmlFor={label} className="flex justify-between w-16">
        <input
          className="w-full block px-2"
          type="number"
          name={label}
          id={label}
          value={value}
          min={0}
          max={maxNumber}
          onChange={handleValueChange}
        />
        <button
          className="text-gray-400 pr-2"
          type="button"
          onClick={handleDelete}
          aria-label="Delete"
        >
          <TiDelete />
        </button>
      </label>
      <p className="border-l border-gray-200 bg-gray-50 text-gray-300 text-xs px-2">
        {TIME_TYPE_STRING[timeType]}
      </p>
    </div>
  );
};

export default TimeInput;

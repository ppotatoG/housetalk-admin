import React from 'react';
import { TiDelete } from 'react-icons/ti';

import { TIME_TYPE_STRING } from '@/constants/input';
interface TimeInputProps {
  label: string;
  value: number;
  setValue: (value: number) => void;
  isHour?: boolean;
  timeType: 'HOUR' | 'MINUTE' | 'SECOND';
}

const TimeInput: React.FC<TimeInputProps> = ({
  label,
  value,
  setValue,
  isHour,
  timeType,
}) => {
  const handleDelete = () => {
    setValue(0);
  };

  return (
    <label htmlFor={label} className="flex border border-gray-200 w-20 pl-2">
      <input
        className="w-3/4"
        type="text"
        name=""
        id={label}
        value={value}
        min={0}
        max={isHour ? 23 : 59}
        onChange={e => setValue(Number(e.target.value))}
      />
      <button className="w-1/4 text-gray-400">
        <TiDelete onClick={handleDelete} />
      </button>
      <span className="border-l-2 border-gray-200 px-2">
        {TIME_TYPE_STRING[timeType]}
      </span>
    </label>
  );
};

export default TimeInput;

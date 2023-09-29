import moment from 'moment';
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { BsCalendar3 } from 'react-icons/bs';
import { TbTilde } from 'react-icons/tb';

import 'react-calendar/dist/Calendar.css';
import RequiredMark from './RequiredMark';
import ToggleDisableButton from './ToggleDisableButton';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface RangeDateProps {
  minValue: Date;
  setMinValue: (value: Date) => void;
  maxValue: Date;
  setMaxValue: (value: Date) => void;
  labelRangeDate: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

type CalendarTypes = 'min' | 'max' | null;

const RangeDate: React.FC<RangeDateProps> = ({
  minValue,
  setMinValue,
  maxValue,
  setMaxValue,
  labelRangeDate,
  required = false,
  disabled = false,
  className,
}) => {
  const [showCalendar, setShowCalendar] = useState<CalendarTypes>(null);
  const [isDisabled, setIsDisabled] = useState(disabled);

  useEffect(() => {
    if (isDisabled && !required) {
      setMinValue(new Date()); // Default date, you can adjust as needed.
      setMaxValue(new Date()); // Default date, you can adjust as needed.
    }
  }, [isDisabled, setMinValue, setMaxValue, required]);

  const handleDateChange = (value: Value, type: CalendarTypes) => {
    if (value instanceof Date) {
      if (type === 'min') {
        setMinValue(value);
      } else {
        setMaxValue(value);
      }
    }
    setShowCalendar(null);
  };

  const handleDisableToggle = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <>
      <div
        className={`border border-gray-200 dark:border-gray-800 flex items-center w-1/2 ${
          className || ''
        }`}
      >
        <div className="bg-gray-200 dark:bg-gray-800 p-2 w-1/3">
          {labelRangeDate}
          {required && <RequiredMark required={required} />}
        </div>
        <div
          className={`p-2 flex gap-4 items-center w-2/3 relative ${
            isDisabled && 'bg-gray-50 text-gray-300'
          }`}
        >
          <button
            className="flex gap-2 items-center"
            disabled={disabled}
            onClick={() =>
              !isDisabled && setShowCalendar(prev => (prev ? prev : 'min'))
            }
          >
            {moment(minValue).format('YYYY-MM-DD')}
            <BsCalendar3 />
          </button>
          <TbTilde />
          <button
            className="flex gap-2 items-center"
            disabled={disabled}
            onClick={() =>
              !isDisabled && setShowCalendar(prev => (prev ? prev : 'max'))
            }
          >
            {moment(maxValue).format('YYYY-MM-DD')}
            <BsCalendar3 />
          </button>
          {!required && (
            <ToggleDisableButton
              required={required}
              handleDisableToggle={handleDisableToggle}
            />
          )}
        </div>
      </div>
      {!disabled && showCalendar === 'min' && (
        <Calendar
          locale="ko"
          onChange={(value: Value) => handleDateChange(value, 'min')}
          value={minValue}
        />
      )}
      {!disabled && showCalendar === 'max' && (
        <Calendar
          locale="ko"
          onChange={(value: Value) => handleDateChange(value, 'max')}
          value={maxValue}
        />
      )}
    </>
  );
};

export default RangeDate;

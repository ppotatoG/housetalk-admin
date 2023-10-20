import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { Calendar } from 'react-calendar';
import { BsCalendar3 } from 'react-icons/bs';
import { TbTilde } from 'react-icons/tb';

import { ToggleDisableButton, RequiredMark } from '@/component/common/input';
import TimeInput from '@/component/common/input/component/TimeInput';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface RangeDateAndTimeProps {
  minValue: Date;
  setMinValue: (value: Date) => void;
  maxValue: Date;
  setMaxValue: (value: Date) => void;
  labelRangeDateAndTime: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

type CalendarTypes = 'min' | 'max' | null;

const RangeDateAndTime: React.FC<RangeDateAndTimeProps> = ({
  minValue,
  setMinValue,
  maxValue,
  setMaxValue,
  labelRangeDateAndTime,
  required = false,
  disabled = false,
  className,
}) => {
  const [showCalendar, setShowCalendar] = useState<CalendarTypes>(null);
  const [isDisabled, setIsDisabled] = useState(disabled);

  useEffect(() => {
    if (isDisabled && !required) {
      setMinValue(new Date());
      setMaxValue(new Date());
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
    <div
      className={`border border-gray-200 dark:border-gray-800 flex items-center w-1/2 ${
        className || ''
      }`}
    >
      <div className="bg-gray-200 dark:bg-gray-800 p-2 w-1/3">
        {labelRangeDateAndTime}
        {required && <RequiredMark required={required} />}
      </div>
      <div
        className={`p-2 flex gap-4 items-center w-2/3 relative ${
          isDisabled && 'bg-gray-50 text-gray-300'
        }`}
      >
        <button
          type="button"
          className="flex gap-2 items-center"
          disabled={disabled}
          onClick={() => {
            if (!isDisabled) {
              setShowCalendar(prev => (prev === 'min' ? null : 'min'));
            }
          }}
        >
          {moment(minValue).format('YYYY-MM-DD')}
          <BsCalendar3 />
        </button>
        <TimeInput
          value={minValue.getHours()}
          setValue={(hour: number) => {
            const newDate = new Date(minValue);
            newDate.setHours(hour);
            setMinValue(newDate);
          }}
          label="minValue_getHours"
          timeType="HOUR"
        />
        <TimeInput
          value={minValue.getMinutes()}
          setValue={(hour: number) => {
            const newDate = new Date(minValue);
            newDate.setMinutes(hour);
            setMinValue(newDate);
          }}
          label="minValue_getMinutes"
          timeType="MINUTE"
        />
        <TbTilde />
        <button
          type="button"
          className="flex gap-2 items-center"
          disabled={disabled}
          onClick={() => {
            if (!isDisabled) {
              setShowCalendar(prev => (prev === 'max' ? null : 'max'));
            }
          }}
        >
          {moment(maxValue).format('YYYY-MM-DD')}
          <BsCalendar3 />
        </button>
        <TimeInput
          value={maxValue.getHours()}
          setValue={(hour: number) => {
            const newDate = new Date(maxValue);
            newDate.setHours(hour);
            setMinValue(newDate);
          }}
          label="maxValue_getHours"
          timeType="HOUR"
        />
        <TimeInput
          value={maxValue.getMinutes()}
          setValue={(hour: number) => {
            const newDate = new Date(maxValue);
            newDate.setMinutes(hour);
            setMinValue(newDate);
          }}
          label="maxValue_getMinutes"
          timeType="MINUTE"
        />
        {!required && (
          <ToggleDisableButton
            required={required}
            handleDisableToggle={handleDisableToggle}
          />
        )}
        <div className="absolute z-20" style={{ top: '120%' }}>
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
        </div>
      </div>
    </div>
  );
};

export default RangeDateAndTime;

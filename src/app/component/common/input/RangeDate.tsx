import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { Calendar } from 'react-calendar';
import { BsCalendar3 } from 'react-icons/bs';

import TimeInput from '@/component/common/input/component/TimeInput';

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
  useHour?: boolean;
  useMinute?: boolean;
  useSecond?: boolean;
  height?: number;
  titleWidthClass?: string;
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
  useHour = false,
  useMinute = false,
  useSecond = false,
  height = 9,
  titleWidthClass,
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
    setShowCalendar(null);
  };

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
        {labelRangeDate}
        {required && <RequiredMark required={required} />}
      </div>
      <div
        className={`px-2 h-full flex gap-4 items-center relative ${
          isDisabled && 'bg-gray-50 text-gray-300'
        } ${titleWidthClass ? 'w-full' : 'w-2/3'}`}
      >
        <div className="flex gap-4">
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
          {useHour && (
            <TimeInput
              value={minValue.getHours()}
              label="minValue_hours"
              timeType="HOUR"
              setValue={(hour: number) => {
                const newDate = new Date(minValue);
                newDate.setHours(hour);
                setMinValue(newDate);
              }}
            />
          )}
          {useMinute && (
            <TimeInput
              value={minValue.getMinutes()}
              label="minValue_minutes"
              timeType="MINUTE"
              setValue={(hour: number) => {
                const newDate = new Date(minValue);
                newDate.setMinutes(hour);
                setMinValue(newDate);
              }}
            />
          )}
          {useSecond && (
            <TimeInput
              value={minValue.getSeconds()}
              label="minValue_seconds"
              timeType="SECOND"
              setValue={(hour: number) => {
                const newDate = new Date(minValue);
                newDate.setMinutes(hour);
                setMinValue(newDate);
              }}
            />
          )}
        </div>
        ~
        <div className="flex gap-4">
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
          {useHour && (
            <TimeInput
              value={maxValue.getHours()}
              label="maxValue_hours"
              timeType="HOUR"
              setValue={(hour: number) => {
                const newDate = new Date(maxValue);
                newDate.setHours(hour);
                setMaxValue(newDate);
              }}
            />
          )}
          {useMinute && (
            <TimeInput
              value={maxValue.getMinutes()}
              label="maxValue_minutes"
              timeType="MINUTE"
              setValue={(hour: number) => {
                const newDate = new Date(maxValue);
                newDate.setMinutes(hour);
                setMaxValue(newDate);
              }}
            />
          )}
          {useSecond && (
            <TimeInput
              value={maxValue.getSeconds()}
              label="maxValue_seconds"
              timeType="SECOND"
              setValue={(hour: number) => {
                const newDate = new Date(maxValue);
                newDate.setMinutes(hour);
                setMaxValue(newDate);
              }}
            />
          )}
        </div>
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

export default RangeDate;

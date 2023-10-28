import React, { useState, useEffect } from 'react';

import RequiredMark from './RequiredMark';
import ToggleDisableButton from './ToggleDisableButton';

interface TextProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
  labelText: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  height?: number;
  titleWidthClass?: string;
}

const Text: React.FC<TextProps> = ({
  label,
  value,
  setValue,
  labelText,
  placeholder,
  type,
  required = false,
  disabled = false,
  className,
  height = 9,
  titleWidthClass,
}) => {
  const [isDisabled, setIsDisabled] = useState(disabled);

  useEffect(() => {
    if (isDisabled && !required) {
      setValue('');
    }
  }, [isDisabled, setValue, required]);

  const handleDisableToggle = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <div
      className={`border border-gray-200 dark:border-gray-800 flex items-center w-1/2 ${
        className || ''
      } ${height && `h-${height}`}`}
    >
      <label
        htmlFor={label}
        className={`h-full leading-9 bg-gray-200 dark:bg-gray-800 px-2 flex items-center ${
          titleWidthClass ? titleWidthClass : 'w-1/3'
        }`}
      >
        {labelText}
        {required && <RequiredMark required={required} />}
      </label>
      <input
        className={`h-full leading-9 px-2 pr-8 ${
          isDisabled ? 'bg-gray-50 text-gray-300' : ''
        } ${titleWidthClass ? 'w-full' : 'w-2/3'}`}
        type={type || 'text'}
        id={label}
        value={value}
        placeholder={placeholder}
        disabled={isDisabled}
        onChange={e => setValue(e.target.value)}
        required={required}
      />
      {!required && (
        <ToggleDisableButton
          required={required}
          handleDisableToggle={handleDisableToggle}
        />
      )}
    </div>
  );
};

export default Text;

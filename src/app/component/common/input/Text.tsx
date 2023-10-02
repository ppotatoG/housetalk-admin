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
      className={`relative border border-gray-200 dark:border-gray-800 flex items-center w-1/2 ${
        className || ''
      }`}
    >
      <label htmlFor={label} className="bg-gray-200 dark:bg-gray-800 p-2 w-1/3">
        {labelText}
        {required && <RequiredMark required={required} />}
      </label>
      <input
        className={`p-2 w-2/3 pr-8 ${
          isDisabled ? 'bg-gray-50 text-gray-300' : ''
        }`}
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

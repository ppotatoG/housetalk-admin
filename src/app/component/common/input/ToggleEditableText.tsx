'use client';

import React, { useState, useRef, useEffect } from 'react';

import Button from '@/component/common/Button';

interface TextProps {
  id: string;
  value: string;
  setValue: (value: string) => void;
  labelText: string;
  handleSave: () => void;
}

const ToggleEditableText: React.FC<TextProps> = ({
  id,
  value,
  setValue,
  labelText,
  handleSave,
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEdit = () => {
    if (isEdit) {
      handleSave();
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  };

  useEffect(() => {
    if (isEdit) {
      inputRef.current?.focus();
    }
  }, [isEdit]);

  return (
    <div className="h-9 relative border border-gray-200 dark:border-gray-800 flex items-center">
      <div className="h-full leading-9 bg-gray-200 dark:bg-gray-800 px-2 w-1/3">
        {labelText}
      </div>
      <div className="h-full leading-9 px-2 w-2/3 flex justify-between items-center">
        <label htmlFor={id} className="h-full py-1">
          <input
            className={`w-60 block h-full ${
              isEdit ? 'bg-indigo-50' : 'bg-transparent'
            }`}
            type="text"
            name=""
            id={id}
            value={value}
            disabled={!isEdit}
            ref={inputRef}
            onChange={e => {
              setValue(e.target.value);
            }}
          />
        </label>
        <Button
          variant={isEdit ? 'filled' : 'outlined'}
          onClick={handleEdit}
          size="small"
        >
          {isEdit ? '수정완료' : '수정'}
        </Button>
      </div>
    </div>
  );
};

export default ToggleEditableText;

'use client';

import React, { useState } from 'react';

import Button from '@/component/common/Button';

interface TextProps {
  value: string;
  labelText: string;
  handleSave: () => void;
}

const ToggleEditableText: React.FC<TextProps> = ({
  value,
  labelText,
  handleSave,
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const handleEdit = () => {
    if (isEdit) {
      handleSave();
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  };

  return (
    <div className="h-9 relative border border-gray-200 dark:border-gray-800 flex items-center">
      <div className="h-full leading-9 bg-gray-200 dark:bg-gray-800 px-2 w-1/3">
        {labelText}
      </div>
      <div className="h-full leading-9 px-2 w-2/3 flex justify-between items-center">
        <label htmlFor={value} className="h-full py-1">
          <input
            className={`w-60 block h-full ${
              isEdit ? 'bg-indigo-50' : 'bg-transparent'
            }`}
            type="text"
            name=""
            id={value}
            defaultValue={value}
            disabled={!isEdit}
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

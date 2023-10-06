import React from 'react';

import Button from '@/component/common/Button';

interface TextProps {
  value: string;
  labelText: string;
  handleReset?: () => void;
  handleUseRouter?: () => void;
}

const ReadOnlyText: React.FC<TextProps> = ({
  value,
  labelText,
  handleReset,
  handleUseRouter,
}) => {
  return (
    <div className="relative border border-gray-200 dark:border-gray-800 flex items-center">
      <div className="bg-gray-200 dark:bg-gray-800 p-3 w-1/3">{labelText}</div>
      <div className="px-3 w-2/3 flex justify-between items-center">
        {value}
        {handleReset && (
          <Button variant="outlined" onClick={handleReset} size="small">
            초기화
          </Button>
        )}
        {handleUseRouter && (
          <Button variant="outlined" onClick={handleUseRouter} size="small">
            상세
          </Button>
        )}
      </div>
    </div>
  );
};

export default ReadOnlyText;

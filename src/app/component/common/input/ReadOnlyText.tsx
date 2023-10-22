import React from 'react';

import Button from '@/component/common/Button';

interface TextProps {
  value: string;
  labelText: string;
  handleReset?: () => void;
  handleUseRouter?: () => void;
  callbackMessage?: string;
  handleCallback?: () => void;
}

const ReadOnlyText: React.FC<TextProps> = ({
  value,
  labelText,
  handleReset,
  handleUseRouter,
  callbackMessage,
  handleCallback,
}) => {
  return (
    <div className="h-9 relative border border-gray-200 dark:border-gray-800 flex items-center">
      <div className="bg-gray-200 dark:bg-gray-800 h-full leading-9 px-2 w-1/3">
        {labelText}
      </div>
      <div className="h-full leading-9 px-2 w-2/3 flex justify-between items-center">
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
        {callbackMessage && handleCallback && (
          <Button variant="outlined" onClick={handleCallback} size="small">
            {callbackMessage}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ReadOnlyText;

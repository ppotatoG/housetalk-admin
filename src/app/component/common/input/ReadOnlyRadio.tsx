import React from 'react';

interface TextProps {
  value: string;
  labelText: string;
  radioList: string[];
}

const ReadOnlyRadio: React.FC<TextProps> = ({
  value,
  labelText,
  radioList,
}) => {
  return (
    <div className="relative border border-gray-200 dark:border-gray-800 flex items-center">
      <div className="bg-gray-200 dark:bg-gray-800 p-3 w-1/3">{labelText}</div>
      <div className="px-3 w-2/3 flex gap-8 items-center">
        {radioList.map((radio, index) => {
          return (
            <div key={index} className="flex items-center">
              <label
                className="relative flex cursor-pointer items-center p-3"
                htmlFor={radio}
              >
                <input
                  id={radio}
                  name="type"
                  type="radio"
                  checked={value === radio}
                  disabled
                  className="appearance-none rounded-full h-5 w-5 border border-blue-700 text-blue-500 transition-all hover:border-blue-500"
                />
                <div
                  className={
                    value === radio
                      ? 'absolute inset-0 flex items-center justify-center'
                      : 'hidden'
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle cx="8" cy="8" r="6"></circle>
                  </svg>
                </div>
              </label>
              <label className="cursor-pointer text-gray-700" htmlFor={radio}>
                {radio}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReadOnlyRadio;

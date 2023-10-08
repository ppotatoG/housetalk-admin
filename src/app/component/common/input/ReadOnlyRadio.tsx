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
        {radioList.map(radio => {
          return (
            <label
              className="relative flex items-center gap-2 cursor-pointer py-3"
              htmlFor={radio}
              key={radio}
              aria-readonly={true}
            >
              <input
                id={radio}
                name="type"
                type="radio"
                checked={value === radio}
                disabled
                readOnly
                className={`appearance-none rounded-full h-5 w-5 border ${
                  value === radio ? 'border-indigo-950' : 'border-gray-200'
                }`}
              />
              <div
                className={
                  value === radio
                    ? 'absolute left-1 flex items-center'
                    : 'hidden'
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 16 16"
                  fill="#1d1b4b"
                >
                  <circle cx="8" cy="8" r="6"></circle>
                </svg>
              </div>
              <span>{radio}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default ReadOnlyRadio;

import React from 'react';

interface TextProps {
  labelText: string;
  value: CheckData;
  setValue: (value: CheckData) => void;
  radioList: CheckData[];
}

const ReadOnlyRadio: React.FC<TextProps> = ({
  labelText,
  value,
  setValue,
  radioList,
}) => {
  return (
    <div className="relative border border-gray-200 dark:border-gray-800 flex items-center w-1/2">
      <div className="bg-gray-200 dark:bg-gray-800 p-3 w-1/3">{labelText}</div>
      <div className="px-3 w-2/3 flex gap-8 items-center">
        {radioList.map((radio, index) => {
          return (
            <>
              <label
                key={index}
                className="relative flex items-center cursor-pointer"
                htmlFor={radio.label}
              >
                <input
                  id={radio.label}
                  name="type"
                  type="radio"
                  onChange={() => setValue(radio)}
                  className="appearance-none rounded-full h-5 w-5 border border-blue-700 text-blue-500 transition-all hover:border-blue-500"
                />
                <span
                  className={
                    value.label === radio.label
                      ? 'absolute left-1 flex items-center'
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
                </span>
                <span className="ml-4 cursor-pointer text-gray-700">
                  {radio.label}
                </span>
              </label>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ReadOnlyRadio;

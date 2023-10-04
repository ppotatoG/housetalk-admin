import React from 'react';

import Button from '@/component/common/Button';
import { TABLE_ROW_LIMIT } from '@/constants/TABLE_ROW_LIMIT';

import Pagination from './Pagination';

interface TableProps {
  headers: string[];
  rows: searchUser[];
  onClickViewAction?: (row: searchUser) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxPagesToShow?: number;
}

const Table: React.FC<TableProps> = ({
  headers,
  rows,
  onClickViewAction,
  currentPage,
  totalPages,
  onPageChange,
  maxPagesToShow = TABLE_ROW_LIMIT,
}) => {
  const startIndex = (currentPage - 1) * maxPagesToShow;
  const endIndex = startIndex + maxPagesToShow;
  const currentRows = rows.slice(startIndex, endIndex);

  return (
    <div className="mt-8 flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg overflow-hidden dark:border-gray-700">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                  >
                    NO
                  </th>
                  {headers.map((header, idx) => (
                    <th
                      key={idx}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      {header}
                    </th>
                  ))}
                  {onClickViewAction && (
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400"
                    >
                      상세
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {currentRows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                      {startIndex + rowIndex + 1}
                    </td>
                    {Object.values(row).map((cellValue, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                      >
                        {cellValue.toString()}
                      </td>
                    ))}
                    {onClickViewAction && (
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Button
                          onClick={() => onClickViewAction(row)}
                          type="button"
                          variant="outlined"
                        >
                          보기
                        </Button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        maxPagesToShow={maxPagesToShow}
      />
    </div>
  );
};

export default Table;

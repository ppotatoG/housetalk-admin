import React from 'react';

import Button from '@/component/common/Button';
import { TABLE_ROW_LIMIT } from '@/constants/TABLE_ROW_LIMIT';

import Pagination from './Pagination';

interface TableProps {
  headers: string[];
  rows: Rows;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxPagesToShow?: number;
  hiddenColumns?: string[];
  onClickViewAction?: (row: Row) => void;
  onClickUpdateAction?: (row: Row) => void;
  onClickDeleteAction?: (row: Row) => void;
}

const Table: React.FC<TableProps> = ({
  headers,
  rows,
  currentPage,
  totalPages,
  onPageChange,
  maxPagesToShow = TABLE_ROW_LIMIT,
  hiddenColumns = [],
  onClickViewAction,
  onClickUpdateAction,
  onClickDeleteAction,
}) => {
  const startIndex = (currentPage - 1) * maxPagesToShow;
  const endIndex = startIndex + maxPagesToShow;
  const currentRows = rows.slice(startIndex, endIndex);

  return (
    <div className="mt-8 flex flex-col">
      <div className="border rounded-lg dark:border-gray-700">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th
                scope="col"
                className="px-4 py-6 text-left font-normal text-gray-500 uppercase dark:text-gray-400 whitespace-no-wrap"
              >
                NO
              </th>
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  scope="col"
                  className="px-4 py-6 text-left font-normal text-gray-500 uppercase dark:text-gray-400 whitespace-no-wrap"
                >
                  {header}
                </th>
              ))}
              {onClickViewAction && (
                <th
                  scope="col"
                  className="px-4 py-6 text-left font-normal text-gray-500 uppercase dark:text-gray-400 whitespace-no-wrap"
                >
                  상세
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {currentRows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="px-4 py-6 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                  {startIndex + rowIndex + 1}
                </td>
                {Object.entries(row).map(([key, value], cellIndex) => {
                  if (hiddenColumns.includes(key)) return null;
                  return (
                    <td
                      key={cellIndex}
                      className="px-4 py-6 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200"
                    >
                      {value.toString()}
                    </td>
                  );
                })}
                {onClickViewAction && (
                  <td className="px-4 py-6 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                    <Button
                      onClick={() => onClickViewAction(row)}
                      type="button"
                      variant="outlined"
                      size="small"
                    >
                      보기
                    </Button>
                  </td>
                )}
                {(onClickUpdateAction || onClickDeleteAction) && (
                  <td className="px-4 py-6 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 gap-1 flex ">
                    {onClickUpdateAction && (
                      <Button
                        onClick={() => onClickUpdateAction(row)}
                        type="button"
                        variant="outlined"
                        size="small"
                      >
                        수정
                      </Button>
                    )}
                    {onClickDeleteAction && (
                      <Button
                        onClick={() => onClickDeleteAction(row)}
                        type="button"
                        variant="filled"
                        size="small"
                      >
                        삭제
                      </Button>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
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

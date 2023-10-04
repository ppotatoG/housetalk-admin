import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxPagesToShow: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  maxPagesToShow,
}) => {
  console.log(totalPages);
  const getStartAndEndPages = () => {
    const halfWay = Math.floor(maxPagesToShow / 2);

    let startPage = currentPage - halfWay;
    let endPage = currentPage + halfWay;

    if (startPage < 1) {
      endPage += 1 - startPage;
      startPage = 1;
    }

    if (endPage > totalPages) {
      startPage -= endPage - totalPages;
      endPage = totalPages;
    }

    startPage = Math.max(startPage, 1);

    return { startPage, endPage };
  };

  const { startPage, endPage } = getStartAndEndPages();

  return (
    <ul
      aria-label="Page navigation"
      className="mt-4 flex items-center justify-center -space-x-px h-10 text-base"
    >
      <li>
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className={`flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
            currentPage === 1 && 'cursor-not-allowed opacity-50'
          }`}
        >
          <span className="sr-only">Previous</span>
          <svg
            className="w-3 h-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </button>
      </li>
      {Array.from({ length: endPage - startPage + 1 }).map((_, index) => (
        <li key={index}>
          <button
            onClick={() => onPageChange(startPage + index)}
            className={`flex items-center justify-center px-4 h-10 leading-tight ${
              startPage + index === currentPage
                ? 'text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            }`}
          >
            {startPage + index}
          </button>
        </li>
      ))}
      <li>
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
            currentPage === totalPages && 'cursor-not-allowed opacity-50'
          }`}
        >
          <span className="sr-only">Next</span>
          <svg
            className="w-3 h-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </button>
      </li>
    </ul>
  );
};

export default Pagination;

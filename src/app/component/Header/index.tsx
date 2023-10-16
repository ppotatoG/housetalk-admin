import React from 'react';

const DUMMY_USER_NAME = '홍길동';

const Navigation = () => {
  return (
    <header className="z-10 sticky top-0 left-0 bg-white flex items-center justify-end gap-4 p-4 shadow-md shadow-gray-200 dark:shadow-gray-800">
      <p>
        안녕하세요, <b>{DUMMY_USER_NAME}</b>님
      </p>
      <button className="border border-solid border-gray-400 dark:border-gray-300 rounded-md px-2 py-1">
        로그아웃
      </button>
    </header>
  );
};

export default Navigation;

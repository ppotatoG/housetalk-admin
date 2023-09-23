'use client';

import { FiRefreshCcw } from 'react-icons/fi';
import UserSubscriptionTrend from '@/app/component/Dashboard/UserSubscriptionTrend';
import GenderStatistics from '@/app/component/Dashboard/GenderStatistics';

interface DUMMY_SIGNUP_CONTENTS_TYPE {
  date: string;
  daily: number;
  cumulative: number;
}

const DUMMY_SIGNUP_CONTENTS: DUMMY_SIGNUP_CONTENTS_TYPE[] = [
  { date: '2023-09-19', daily: 5, cumulative: 1200 },
  { date: '2023-09-18', daily: 7, cumulative: 1195 },
  { date: '2023-09-17', daily: 4, cumulative: 1188 },
  { date: '2023-09-16', daily: 6, cumulative: 1184 },
  { date: '2023-09-15', daily: 8, cumulative: 1178 },
  { date: '2023-09-14', daily: 9, cumulative: 1170 },
  { date: '2023-09-13', daily: 4, cumulative: 1161 },
  { date: '2023-09-12', daily: 6, cumulative: 1157 },
  { date: '2023-09-11', daily: 5, cumulative: 1151 },
  { date: '2023-09-10', daily: 7, cumulative: 1146 },
  { date: '2023-09-09', daily: 5, cumulative: 1139 },
  { date: '2023-09-08', daily: 3, cumulative: 1134 },
  { date: '2023-09-07', daily: 6, cumulative: 1131 },
  { date: '2023-09-06', daily: 7, cumulative: 1125 },
  { date: '2023-09-05', daily: 5, cumulative: 1118 },
  { date: '2023-09-04', daily: 8, cumulative: 1113 },
  { date: '2023-09-03', daily: 6, cumulative: 1105 },
  { date: '2023-09-02', daily: 9, cumulative: 1099 },
  { date: '2023-09-01', daily: 7, cumulative: 1090 },
  { date: '2023-08-31', daily: 5, cumulative: 1083 },
];

const DUMMY_GENDER_COUNTS = [
  { gender: 'Female', count: 650 },
  { gender: 'Male', count: 550 },
];

const DUMMY_FREE_BOARD_POSTS = Array.from({ length: 20 }, (_, i) => ({
  title: `자유게시판 글 제목 ${i + 1}`,
  time: `2023-09-${19 - i} 10:00`,
}));

const DUMMY_RECOMMEND_ITEM_POSTS = Array.from({ length: 20 }, (_, i) => ({
  title: `추천 아이템 제목 ${i + 1}`,
  time: `2023-09-${19 - i} 11:00`,
}));

const DUMMY_HOUSE_REVIEW_POSTS = Array.from({ length: 20 }, (_, i) => ({
  title: `집 리뷰 제목 ${i + 1}`,
  time: `2023-09-${19 - i} 12:00`,
}));

const Dashboard = () => {
  const now = new Date();

  const formatOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
  };

  const formattedDate = new Date().toLocaleDateString('ko-KR', formatOptions);

  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  const formattedTime = `${formattedDate.replace(
    /\. /g,
    '.'
  )} ${hours}시 ${minutes}분`;

  return (
    <>
      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
        <p>{formattedTime}</p>
        <button>
          <FiRefreshCcw />
        </button>
      </div>
      <div className="flex gap-2 mt-6 h-full">
        <UserSubscriptionTrend
          data={DUMMY_SIGNUP_CONTENTS}
          today="2023.09.19"
        />
        <GenderStatistics data={DUMMY_GENDER_COUNTS} />
      </div>
    </>
  );
};

export default Dashboard;

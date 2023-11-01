'use client';

import { useEffect, useState } from 'react';
import { FiRefreshCcw } from 'react-icons/fi';

import { dummyApi } from '@/api/dummy';
import Board from '@/component/Dashboard/Board';
import GenderStatistics from '@/component/Dashboard/GenderStatistics';
import UserSubscriptionTrend from '@/component/Dashboard/UserSubscriptionTrend';
import {
  DUMMY_SIGNUP_CONTENTS,
  DUMMY_GENDER_COUNTS,
  DUMMY_FREE_BOARD_POSTS,
  DUMMY_RECOMMEND_ITEM_POSTS,
  DUMMY_HOUSE_REVIEW_POSTS,
} from '@/constants';

const Dashboard = () => {
  const getFormattedTime = () => {
    const now = new Date();
    const formatOptions: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      weekday: 'short',
    };
    const formattedDate = now.toLocaleDateString('ko-KR', formatOptions);
    return `${formattedDate.replace(/\.\s/g, '.')} ${now
      .getHours()
      .toString()
      .padStart(2, '0')}시 ${now.getMinutes().toString().padStart(2, '0')}분`;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<null | any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dummyApi({
        signUpContents: DUMMY_SIGNUP_CONTENTS,
        genderCounts: DUMMY_GENDER_COUNTS,
        freeBoardPosts: DUMMY_FREE_BOARD_POSTS,
        recommendItemPosts: DUMMY_RECOMMEND_ITEM_POSTS,
        houseReviewPosts: DUMMY_HOUSE_REVIEW_POSTS,
      });
      setData(response);
    };

    fetchData();
  }, []);

  if (!data) {
    return null;
  }

  const {
    signUpContents,
    genderCounts,
    freeBoardPosts,
    recommendItemPosts,
    houseReviewPosts,
  } = data;

  return (
    <>
      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
        <p>{getFormattedTime()}</p>
        <button aria-label="refresh">
          <FiRefreshCcw />
        </button>
      </div>
      <div className="flex gap-2 mt-6 h-full">
        <UserSubscriptionTrend data={signUpContents} today="2023.09.19" />
        <GenderStatistics data={genderCounts} />
      </div>
      <Board
        freeData={freeBoardPosts}
        recommendData={recommendItemPosts}
        reviewData={houseReviewPosts}
        now={new Date()}
      />
    </>
  );
};

export default Dashboard;

import React from 'react';
import Item from './Item';
import { BOARD_TITLE } from '@/constants/dashboard';

interface DUMMY_POSTS_TYPE {
  title: string;
  update_at: string;
}

interface BoardProps {
  freeData: DUMMY_POSTS_TYPE[];
  recommendData: DUMMY_POSTS_TYPE[];
  reviewData: DUMMY_POSTS_TYPE[];
  now: Date;
}

const Board = ({ freeData, recommendData, reviewData, now }: BoardProps) => {
  return (
    <div className="w-full mt-2">
      <h1 className="text-black text-base font-semibold mb-2">
        게시판 업로드 현황
      </h1>
      <div className="flex gap-2">
        <Item data={freeData} title={BOARD_TITLE.free} now={now} />
        <Item data={recommendData} title={BOARD_TITLE.recommend} now={now} />
        <Item data={reviewData} title={BOARD_TITLE.review} now={now} />
      </div>
    </div>
  );
};

export default Board;

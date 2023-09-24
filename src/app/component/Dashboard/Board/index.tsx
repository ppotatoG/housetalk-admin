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
}

const Board = ({ freeData, recommendData, reviewData }: BoardProps) => {
  return (
    <div className="w-full mt-2">
      <h1 className="text-black text-base font-semibold mb-2">
        게시판 업로드 현황
      </h1>
      <div className="flex gap-2">
        <Item data={freeData} title={BOARD_TITLE.free} />
        <Item data={recommendData} title={BOARD_TITLE.recommend} />
        <Item data={reviewData} title={BOARD_TITLE.review} />
      </div>
    </div>
  );
};

export default Board;

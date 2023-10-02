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

const DUMMY_FREE_BOARD_POSTS: DUMMY_POSTS_TYPE[] = Array.from(
  { length: 10 },
  (_, i) => ({
    title: `자유게시판 글 제목 자유게시판 글 제목 자유게시판 글 제목 ${i + 1}`,
    update_at: `2023-09-${24 - i} 10:00`,
  })
);

const DUMMY_RECOMMEND_ITEM_POSTS: DUMMY_POSTS_TYPE[] = Array.from(
  { length: 10 },
  (_, i) => ({
    title: `추천 아이템 제목 추천 아이템 제목 추천 아이템 제목 ${i + 1}`,
    update_at: `2023-09-${24 - i} 11:00`,
  })
);

const DUMMY_HOUSE_REVIEW_POSTS: DUMMY_POSTS_TYPE[] = Array.from(
  { length: 10 },
  (_, i) => ({
    title: `집 리뷰 제목 집 리뷰 제목 집 리뷰 제목 ${i + 1}`,
    update_at: `2023-09-${24 - i} 12:00`,
  })
);

export {
  DUMMY_SIGNUP_CONTENTS,
  DUMMY_GENDER_COUNTS,
  DUMMY_FREE_BOARD_POSTS,
  DUMMY_RECOMMEND_ITEM_POSTS,
  DUMMY_HOUSE_REVIEW_POSTS,
};

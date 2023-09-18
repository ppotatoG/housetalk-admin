export const MENU: Menu[] = [
  {
    id: 1,
    name: '대시보드',
    path: '/dashboard',
  },
  {
    id: 2,
    name: '회원관리',
    path: '/users',
  },
  {
    id: 3,
    name: '전시 관리',
    subMenu: [
      {
        id: 1,
        name: '메인 페이지',
        subMenu: [
          {
            id: 1,
            name: '앱 배너',
            path: '/exhibition/main/banner',
          },
          {
            id: 2,
            name: '인기 집 리뷰',
            path: '/exhibition/main/reviews',
          },
        ],
      },
      {
        id: 2,
        name: '서브 페이지',
        subMenu: [
          {
            id: 1,
            name: '추천아이템 상단 아이콘',
            path: '/exhibition/sub/recommended',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: '정보제공',
    subMenu: [
      {
        id: 1,
        name: '정보제공 등록하기',
        path: '/information/register',
      },
      {
        id: 2,
        name: '정보 전체 보기',
        path: '/information/view',
      },
    ],
  },
  {
    id: 5,
    name: '고객센터',
    subMenu: [
      {
        id: 1,
        name: '공지사항',
        path: '/cs/notice',
      },
      {
        id: 2,
        name: '약관관리',
        path: '/cs/terms',
      },
      {
        id: 3,
        name: 'FAQ',
        path: '/cs/faq',
      },
    ],
  },
];

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
    path: '/exhibition',
    subMenu: [
      {
        id: 1,
        name: '메인 페이지',
        path: '/exhibition/main',
        subMenu: [
          {
            id: 1,
            name: '앱 배너',
            path: '/exhibition/main/app-banner',
          },
          {
            id: 2,
            name: '인기 집 리뷰',
            path: '/exhibition/main/popular-homes',
          },
        ],
      },
      {
        id: 2,
        name: '서브 페이지',
        path: '/exhibition/sub',
        subMenu: [
          {
            id: 1,
            name: '추천아이템 상단 아이콘',
            path: '/exhibition/sub/recommended-items',
          },
        ],
      },
    ],
  },
];

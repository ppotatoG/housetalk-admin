import React from 'react';

import { DUMMY_USERS } from '@/constants';
import { InvalidLayout } from '@/pageLayout';

import DetailContents from './DetailContents';

interface DetailProps {
  params: { [key: string]: string };
}

const DetailGuard: React.FC<DetailProps> = ({ params }) => {
  const currentUserId = params.id;
  const user = DUMMY_USERS.find(v => v.id === currentUserId);

  if (!user) {
    return <InvalidLayout message="해당 사용자를 찾을 수 없습니다." />;
  }

  return <DetailContents user={user} />;
};

export default DetailGuard;

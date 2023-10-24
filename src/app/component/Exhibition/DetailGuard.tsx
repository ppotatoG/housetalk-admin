import React from 'react';

import EditPage from '@/component/Exhibition/main/banner/EditPage';
import { DUMMY_EXHIBITION } from '@/constants';
import { InvalidLayout } from '@/pageLayout';

interface DetailProps {
  params: { [key: string]: string };
}

const DetailGuard: React.FC<DetailProps> = ({ params }) => {
  const currentBannerId = params.id;
  const banner = DUMMY_EXHIBITION.find(v => v.id === currentBannerId);

  if (!banner) {
    return <InvalidLayout message="해당 배너를 찾을 수 없습니다." />;
  }

  return <EditPage type="update" updateValue={banner} />;
};

export default DetailGuard;

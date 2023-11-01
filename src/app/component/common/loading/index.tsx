import React from 'react';
import ReactLoading from 'react-loading';

import { LOADING } from '@/constants';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <ReactLoading type={LOADING.type} color={LOADING.color} />
    </div>
  );
};

export default Loading;

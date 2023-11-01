import axios from 'axios';

import { hideLoading, showLoading } from '@/slices/loadingSlice';
import store from '@/store';

const interceptors = axios.create({
  baseURL: 'http://localhost:3000',
});

interceptors.interceptors.request.use(
  config => {
    store.dispatch(showLoading());
    return config;
  },
  error => {
    store.dispatch(hideLoading());
    return Promise.reject(error);
  }
);

interceptors.interceptors.response.use(
  response => {
    store.dispatch(hideLoading());
    return response;
  },
  error => {
    store.dispatch(hideLoading());

    if (error.config.url === '/dummy') {
      return {
        data: {
          freeBoardPosts: [],
          genderCounts: [],
          signUpContents: [],
          recommendItemPosts: [],
          houseReviewPosts: [],
        },
      };
    }

    return Promise.reject(error);
  }
);

export default interceptors;

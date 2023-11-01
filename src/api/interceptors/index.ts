import axios from 'axios';

import {
  DUMMY_SIGNUP_CONTENTS,
  DUMMY_GENDER_COUNTS,
  DUMMY_FREE_BOARD_POSTS,
  DUMMY_RECOMMEND_ITEM_POSTS,
  DUMMY_HOUSE_REVIEW_POSTS,
} from '@/constants';
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
          freeBoardPosts: DUMMY_FREE_BOARD_POSTS,
          genderCounts: DUMMY_GENDER_COUNTS,
          signUpContents: DUMMY_SIGNUP_CONTENTS,
          recommendItemPosts: DUMMY_RECOMMEND_ITEM_POSTS,
          houseReviewPosts: DUMMY_HOUSE_REVIEW_POSTS,
        },
      };
    }

    return Promise.reject(error);
  }
);

export default interceptors;

import { configureStore } from '@reduxjs/toolkit';

import modalReducer from '@/slices/modalSlice';

const index = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export default index;

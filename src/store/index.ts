import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import loadingReducer from '@/slices/loadingSlice';
import modalReducer from '@/slices/modalSlice';

import popupMiddleware from '../middlewares/popupMiddleware';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    loading: loadingReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(popupMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;

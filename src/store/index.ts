import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import modalReducer from '@/slices/modalSlice';

import popupMiddleware from '../middlewares/popupMiddleware';

const store = configureStore({
  reducer: {
    modal: modalReducer,
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

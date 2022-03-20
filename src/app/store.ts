import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import currentUserReducer from '../slices/current-user.slice';
import apiReducer from '../slices/api.slice';

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    api: apiReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

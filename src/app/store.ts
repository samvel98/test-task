import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import currentUserReducer from '../features/current-user/current-user.slice';
import apiReducer from '../features/api/api.slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
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

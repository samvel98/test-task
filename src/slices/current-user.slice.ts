import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { getCurrentUser, setCurrentUser as setCurrentUserSession } from '../utils';

type CurrentUser = {
  currentUser?: IUser | null;
}
const initialState: CurrentUser = {
  currentUser: (JSON.parse(getCurrentUser() as string) as IUser)
};

export const currentUserSlice = createSlice({
  name: 'current-user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      setCurrentUserSession(action.payload)
    }
  },
});

export const { setCurrentUser } = currentUserSlice.actions;
export const selectUser = (state: RootState) => state.currentUser.currentUser;
export const currentUser = (state: RootState) => state.currentUser;

export default currentUserSlice.reducer;

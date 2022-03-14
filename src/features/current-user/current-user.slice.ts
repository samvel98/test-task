import { createSlice } from '@reduxjs/toolkit';
import { setToken, getToken } from '../../utils';
import { RootState } from '../../app/store';

type CurrentUser = {
  currentUser: IUser;
  users?: IUserChild[];
  token: string;
}

const initialState: CurrentUser = {
  currentUser: {
    email: '',
    avatar: '',
    id: '',
  },
  users: [],
  token: getToken(),
};

export const currentUserSlice = createSlice({
  name: 'current-user',
  initialState,
  reducers: {
    createUser: (state, action) => {
      state.users?.push(action.payload);
    },
    setLoggedInUserToken: (state, action) => {
      setToken(action.payload);
      state.token = action.payload;
    }
  },
});

export const { createUser, setLoggedInUserToken } = currentUserSlice.actions;

export const selectUser = (state: RootState) => state.currentUser.currentUser;
export const currentUserToken = (state: RootState) => state.currentUser.token;

export default currentUserSlice.reducer;

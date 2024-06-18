import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'firebase/auth';

type TAuthUser = {
  authUser: User | null;
};

const initialState: TAuthUser = {
  authUser: null,
};

export const authUserSlice = createSlice({
  name: 'authUserSlice',
  initialState,
  reducers: {
    setAuthUser(state, action: PayloadAction<User | null>) {
      state.authUser = action.payload;
    },
  },
});

export const { setAuthUser } = authUserSlice.actions;
export default authUserSlice.reducer;

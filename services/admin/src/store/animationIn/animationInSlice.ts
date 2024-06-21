import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TAnimationInState = {
  animationIn: boolean;
};

const initialState: TAnimationInState = {
  animationIn: false,
};

export const animationInSlice = createSlice({
  name: 'animationIn',
  initialState,
  reducers: {
    setAnimationIn(state, action: PayloadAction<boolean>) {
      state.animationIn = action.payload;
    },
  },
});

export const { setAnimationIn } = animationInSlice.actions;
export default animationInSlice.reducer;

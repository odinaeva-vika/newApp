import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TFormState = {
  mounted: boolean;
};

const initialState: TFormState = {
  mounted: false,
};

export const animatedModalSlice = createSlice({
  name: 'animatedModalSlice',
  initialState,
  reducers: {
    setMounted(state, action: PayloadAction<boolean>) {
      state.mounted = action.payload;
    },
  },
});

export const { setMounted } = animatedModalSlice.actions;
export default animatedModalSlice.reducer;

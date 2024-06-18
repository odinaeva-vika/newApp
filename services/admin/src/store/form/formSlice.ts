import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TFormState = {
  email: string;
  password: string;
  copyPassword: string;
  error: string;
};

const initialState: TFormState = {
  email: '',
  password: '',
  copyPassword: '',
  error: '',
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    setCopyPassword(state, action: PayloadAction<string>) {
      state.copyPassword = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    clearForm(state) {
      state.email = '';
      state.password = '';
      state.copyPassword = '';
      state.error = '';
    },
  },
});

export const { setEmail, setPassword, setCopyPassword, setError, clearForm } = formSlice.actions;
export default formSlice.reducer;

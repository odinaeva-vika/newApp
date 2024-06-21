import { ModalType } from '@/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type THomePageState = {
  isModalOpen: boolean;
  formType: ModalType;
};

const initialState: THomePageState = {
  isModalOpen: false,
  formType: 'register',
};

export const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setIsModalOpen(state, action: PayloadAction<boolean>) {
      state.isModalOpen = action.payload;
    },
    setFormType(state, action: PayloadAction<ModalType>) {
      state.formType = action.payload;
    },
  },
});

export const { setIsModalOpen, setFormType } = homePageSlice.actions;
export default homePageSlice.reducer;

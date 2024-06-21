import { configureStore } from '@reduxjs/toolkit';
import animatedModalSlice from './animatedModal/animatedModalSlice';
import animationInSlice from './animationIn/animationInSlice';
import authUserSlice from './authUser/authUserSlice';
import formSlice from './form/formSlice';
import homePageSlice from './homePage/homePageSlice';

export const store = configureStore({
  reducer: {
    form: formSlice,
    animatedModal: animatedModalSlice,
    animationIn: animationInSlice,
    authUser: authUserSlice,
    homePage: homePageSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

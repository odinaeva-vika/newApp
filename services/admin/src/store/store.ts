import { configureStore } from '@reduxjs/toolkit';
import animatedModalSlice from './animatedModal/animatedModalSlice';
import animationInSlice from './animationIn/animationInSlice';
import authUserSlice from './authUser/authUserSlice';
import formSlice from './form/formSlice';

export const store = configureStore({
  reducer: {
    form: formSlice,
    animatedModalSlice: animatedModalSlice,
    animationInSlice: animationInSlice,
    authUser: authUserSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

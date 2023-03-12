import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { employeeSlice } from './slices/employeeSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      [employeeSlice.name]: employeeSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore, {debug: true});
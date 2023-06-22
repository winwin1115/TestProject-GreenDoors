import { configureStore } from "@reduxjs/toolkit";
import TestProjectReducer from "../reducers";

export const store = configureStore({
  reducer: {
    TestProjectReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppTempDispatch = typeof store.dispatch;

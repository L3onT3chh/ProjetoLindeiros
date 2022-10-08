/* eslint-disable @typescript-eslint/no-shadow */
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "app/reducers";

export const Store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

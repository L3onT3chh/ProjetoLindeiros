/* eslint-disable @typescript-eslint/no-shadow */
import { configureStore } from "@reduxjs/toolkit";
import persistReducers from "app/reducers";
import { persistStore } from "redux-persist";

export const Store = configureStore({
  reducer: persistReducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(Store);
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

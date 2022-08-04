import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/user/userSlice";

export const Store = configureStore({
  reducer: {
    users: usersReducer,
    // demandas: demandasReducer,
    // news: newsReducer,
    // eixos: eixosReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

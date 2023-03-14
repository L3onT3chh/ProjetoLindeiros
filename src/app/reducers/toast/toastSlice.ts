/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { IDataToast } from "interfaces/data/toast.interface";

const initialState: IDataToast = {
  error: "",
  loading: false,
  toasts: {
    message: "",
    type: "",
  },
};

const toastSlice = createSlice({
  initialState,
  name: "toast",
  reducers: {
    setMessageToToast: (state: IDataToast, action) => {
      state.toasts.type = action.payload.type;
      state.toasts.message = action.payload.message;
    },
  },
});

export const { setMessageToToast } = toastSlice.actions;
export const getToast = (state: IDataToast) => state.toasts;

export default toastSlice.reducer;

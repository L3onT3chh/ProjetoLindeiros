/* eslint-disable no-param-reassign */
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { fetchAxesThunk } from "app/reducers/axes/thunk";
import { IDataAxes } from "interfaces/data/axes.interface";

const initialState: IDataAxes = {
  axes_selector: "",
  loading: false,
  axes: [],
  error: "",
  message: "",
};

export const axesSlice = createSlice({
  name: "axes",
  initialState,
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    builder.addCase(fetchAxesThunk.pending, (state: IDataAxes) => {
      state.loading = true;
    });
    builder.addCase(fetchAxesThunk.fulfilled, (state: IDataAxes, action) => {
      const { payload } = action;
      state.loading = false;
      if (payload) {
        state.axes = payload.response;
      }
      state.error = "";
    });
    builder.addCase(fetchAxesThunk.rejected, (state: IDataAxes, action) => {
      state.loading = false;
      state.error = action.error.message?.toString() || "";
    });
  },
  reducers: {
    getAxes: () => {},
    setSelectAxes: (state: IDataAxes, action) => {
      state.axes_selector = action.payload;
    },
  },
});

export const { getAxes, setSelectAxes } = axesSlice.actions;

export default axesSlice.reducer;

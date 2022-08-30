/* eslint-disable no-param-reassign */
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { fetchAxesThunk } from "app/reducers/axes/thunk";
import { IDataAxes } from "interfaces/data/axes.interface";

const initialState: IDataAxes = {
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
  reducers: { getAxes: () => {} },
});

export const { getAxes } = axesSlice.actions;

export default axesSlice.reducer;

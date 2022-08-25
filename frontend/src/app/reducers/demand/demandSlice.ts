/* eslint-disable no-param-reassign */
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { fetchDemandsThunk } from "app/reducers/demand/thunk";
import { IDataDemand } from "interfaces/data/demand.interface";

const initialState: IDataDemand = {
  loading: false,
  demand: [],
  error: "",
};

export const demandSlice = createSlice({
  name: "demand",
  initialState,
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    builder.addCase(fetchDemandsThunk.pending, (state: IDataDemand) => {
      state.loading = true;
    });
    builder.addCase(
      fetchDemandsThunk.fulfilled,
      (state: IDataDemand, action) => {
        state.loading = false;
        state.demand = action.payload;
        state.error = "";
      },
    );
    builder.addCase(
      fetchDemandsThunk.rejected,
      (state: IDataDemand, action) => {
        state.loading = false;
        state.demand = [];
        state.error = action.error.message?.toString() || "";
      },
    );
  },
  reducers: {
    getDemand: () => {},
  },
});

export const { getDemand } = demandSlice.actions;

export default demandSlice.reducer;

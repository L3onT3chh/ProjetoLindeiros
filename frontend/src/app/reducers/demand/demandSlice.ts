/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import {
  createDemandsThunk,
  deleteDemandsThunk,
  fetchDemandsThunk,
} from "app/reducers/demand/thunk";
import { IDataDemand } from "interfaces/data/demand.interface";

const initialState: IDataDemand = {
  loading: false,
  demand: [],
  error: "",
  message: "",
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
    builder.addCase(
      createDemandsThunk.fulfilled,
      (state: IDataDemand, action) => {
        state.loading = false;
        if (action.payload.status === 200 && action.payload.response) {
          state.demand.push(action.payload.response[0]);
        }
      },
    );
    builder.addCase(createDemandsThunk.pending, (state: IDataDemand) => {
      state.loading = true;
    });
    builder.addCase(
      deleteDemandsThunk.fulfilled,
      (state: IDataDemand, action) => {
        state.loading = false;
        if (action.payload.status === 200) {
          const { idRemove } = action.payload;
          const dataTemp = state.demand.filter((item) => item.id !== idRemove);
          state.demand = dataTemp;
        }
      },
    );
    builder.addCase(deleteDemandsThunk.pending, (state: IDataDemand) => {
      state.loading = true;
    });
  },
  reducers: {
    addDemand: () => {},
    removeDemand: () => {},
  },
});

export const { addDemand } = demandSlice.actions;

export default demandSlice.reducer;

/* eslint-disable no-param-reassign */
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { fetchTypesThunk } from "app/reducers/thunks";
import { IDataTypes } from "interfaces/data/types.interface";

const initialState: IDataTypes = {
  types: [],
  loading: false,
  error: "",
};

export const typesSlice = createSlice({
  name: "types",
  initialState,
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    builder.addCase(fetchTypesThunk.pending, (state: IDataTypes) => {
      state.loading = true;
    });
    builder.addCase(fetchTypesThunk.fulfilled, (state: IDataTypes, action) => {
      state.types = action.payload;
      state.error = "";
      state.loading = false;
    });
    builder.addCase(fetchTypesThunk.rejected, (state: IDataTypes, action) => {
      state.loading = false;
      state.types = [];
      state.error = action.error.message?.toString() || "";
    });
  },
  reducers: {
    getData: () => {},
  },
});

export const { getData } = typesSlice.actions;

export default typesSlice.reducer;

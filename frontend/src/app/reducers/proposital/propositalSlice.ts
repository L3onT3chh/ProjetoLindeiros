/* eslint-disable no-param-reassign */
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { IDataProposal } from "interfaces/data/demand.interface";
import { createProposalThunk } from "./thunk";

const initialState: IDataProposal = {
  loading: false,
  proposal: [],
  error: "",
};

export const proposalSlice = createSlice({
  name: "proposal",
  initialState,
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    builder.addCase(
      createProposalThunk.fulfilled,
      (state: IDataProposal, action) => {
        const { payload } = action;

        if (payload !== undefined) {
          state.loading = true;
          state.message = payload.message;
        }
      },
    );
  },
  reducers: {
    insertProposal: () => {},
    allProposal: () => {},
  },
});

export const { insertProposal, allProposal } = proposalSlice.actions;

export default proposalSlice.reducer;

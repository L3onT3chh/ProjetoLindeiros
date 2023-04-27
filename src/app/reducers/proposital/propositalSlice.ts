/* eslint-disable no-param-reassign */
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { IDataProposal } from "interfaces/data/demand.interface";
import { createProposalThunk, findOneProposal, updateProposal } from "./thunk";
import { IStateData } from "interfaces/components.interface";

const initialState: IDataProposal = {
  loading: false,
  proposal: [],
  error: "",
  status: 0
};

export const proposalSlice = createSlice({
  name: "proposal",
  initialState,
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    builder.addCase(
      createProposalThunk.fulfilled,
      (state: IDataProposal, action) => {
        const { payload } = action;
        console.log(payload);
        if (payload.data) {
          console.log(payload.data);
        }

        if (payload !== undefined) {
          state.loading = true;
          state.message = payload.message;
        }

        state.loading = false;
      },
    );
    builder.addCase(
      createProposalThunk.pending,
      (state: IDataProposal) => {
        state.loading = true;
      },
    );
    builder.addCase(
      findOneProposal.pending,
      (state: IDataProposal) => {
        state.loading = true;
      },
    );
    builder.addCase(
      findOneProposal.fulfilled,
      (state: IDataProposal, action) => {
        const { payload } = action;
        
        state.proposal = payload.response.Proposal;
        state.loading = false;
      },
    );
    builder.addCase(
      updateProposal.pending,
      (state: IDataProposal) => {
        state.loading = true;
      },
    );
    builder.addCase(
      updateProposal.fulfilled,
      (state: IDataProposal, action) => {
        state.loading = false;
        state.status = action.payload.status;
      },
    );

  },
  reducers: {
    insertProposal: () => { },
    allProposal: () => { },
  },
});

export const { insertProposal, allProposal } = proposalSlice.actions;

export default proposalSlice.reducer;
export const proposalStatus = (state: IStateData) => state.proposal.status;


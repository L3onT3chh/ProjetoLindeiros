/* eslint-disable no-param-reassign */
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { IDataProposal } from "interfaces/data/demand.interface";
import { createProposalThunk, fetchProposalRelatedDemand, fetchProposalRelatedDemandById, findOneProposal, updateProposal } from "./thunk";
import { IStateData } from "interfaces/components.interface";
import { convertToArray } from "util/handleSelectorObj";

const initialState: IDataProposal = {
  loading: false,
  proposal: [],
  item: undefined,
  secondaryLoading: false,
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
        state.secondaryLoading = true;
      },
    );
    builder.addCase(
      findOneProposal.fulfilled,
      (state: IDataProposal, action) => {
        const { payload } = action;

        state.item = payload.response.Proposal;
        state.secondaryLoading = false;
      },
    );
    builder.addCase(
      fetchProposalRelatedDemand.fulfilled,
      (state: IDataProposal, action) => {
        const { payload } = action;

        console.log(payload.response);
        state.proposal = convertToArray(payload.response);
        state.loading = false;
      },
    );
    builder.addCase(
      fetchProposalRelatedDemandById.fulfilled,
      (state: IDataProposal, action) => {
        const { payload } = action;

        console.log(payload.response);
        state.proposal = convertToArray(payload.response);
        state.loading = false;
      },
    );
    builder.addCase(
      fetchProposalRelatedDemandById.pending,
      (state: IDataProposal) => {
        state.loading = true;
      },
    );
    builder.addCase(
      fetchProposalRelatedDemand.pending,
      (state: IDataProposal) => {
        state.loading = true;
      },
    );
    builder.addCase(
      updateProposal.pending,
      (state: IDataProposal) => {
        state.secondaryLoading = true;
      },
    );
    builder.addCase(
      updateProposal.fulfilled,
      (state: IDataProposal, action) => {
        state.secondaryLoading = false;
        state.status = action.payload.status;
      },
    );

  },
  reducers: {
    insertProposal: () => { },
    allProposal: () => { },
    clean: (state: IDataProposal) => {
      state.status = 0;
    }
  },
});

export const { insertProposal, allProposal, clean } = proposalSlice.actions;

export default proposalSlice.reducer;
export const proposalStatus = (state: IStateData) => state.proposal.status;


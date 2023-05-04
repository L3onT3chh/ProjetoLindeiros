import { createAsyncThunk } from "@reduxjs/toolkit";
import { IEProposal, IProposal, IProposalPost } from "interfaces/data/demand.interface";
import proposal from "API/Demand/Proposital/crud.proposal";
import { showErrorMessage } from "util/function";
import { findProposal, proposalRelatedDemand, proposalRelatedDemandById } from "API/Demand/Proposital/find.proposal";

export const createProposalThunk = createAsyncThunk(
  "users/create",
  async (user: IProposalPost) => {
    const response = await proposal.register(user);
    showErrorMessage(
      response.message,
      response.status === 200 ? "success" : "error",
    );
    return response;
  },
);

export const updateProposal = createAsyncThunk("proposal/update", async (data: any) => {
  const response = await proposal.update(data);
    showErrorMessage(
      response.message,
      response.status === 200 ? "success" : "error",
    );
    return response;
});

export const deleteProposal = createAsyncThunk("", async () => {});

export const findOneProposal = createAsyncThunk("proposal/getById", async (id: string) => {
  const response = await findProposal(id);

  console.log(response);
  return {response:response.data};
});

export const fetchProposalRelatedDemand = createAsyncThunk("proposal/getSendProposal", async () => {
  const response = await proposalRelatedDemand();

  return {response:response.data};
});

export const fetchProposalRelatedDemandById = createAsyncThunk("proposal/getSendProposalById", async (id: string) => {
  const response = await proposalRelatedDemandById(id);

  return {response:response.data};
});



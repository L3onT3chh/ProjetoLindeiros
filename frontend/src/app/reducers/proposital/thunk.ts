import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProposalPost } from "interfaces/data/demand.interface";
import proposal from "API/Demand/Proposital/crud.proposal";

export const createProposalThunk = createAsyncThunk(
  "users/create",
  async (user: IProposalPost) => {
    const response = await proposal.register(user);
    return response;
  },
);

export const deleteProposal = createAsyncThunk("", async () => {});

export const updateProposal = createAsyncThunk("", async () => {});

export const findOneProposal = createAsyncThunk("", async () => {});

import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProposalPost } from "interfaces/data/demand.interface";
import proposal from "API/Demand/Proposital/crud.proposal";
import { showErrorMessage } from "util/function";

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

export const deleteProposal = createAsyncThunk("", async () => {});

export const updateProposal = createAsyncThunk("", async () => {});

export const findOneProposal = createAsyncThunk("", async () => {});

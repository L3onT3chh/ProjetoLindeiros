import { createAsyncThunk } from "@reduxjs/toolkit";
import { IEProposal, IProposal, IProposalPost } from "interfaces/data/demand.interface";
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

// export const updateProposal = createAsyncThunk("proposal/update", async (data: IEProposal) => {
//   const response = await proposal.update(data);
//     showErrorMessage(
//       response.message,
//       response.status === 200 ? "success" : "error",
//     );
//     return response;
// });

export const deleteProposal = createAsyncThunk("", async () => {});

export const findOneProposal = createAsyncThunk("", async () => {});

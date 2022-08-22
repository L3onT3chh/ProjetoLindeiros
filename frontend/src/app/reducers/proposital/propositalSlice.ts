import { createSlice } from "@reduxjs/toolkit";
import { IDataProposal } from "interfaces/data/demand.interface";

const initialState: IDataProposal = {
  loading: false,
  proposal: [],
  error: "",
};

export const proposalSlice = createSlice({
  name: "proposal",
  initialState,
  reducers: {
    insertProposal: () => {},
    allProposal: () => {},
  },
});

export const { insertProposal, allProposal } = proposalSlice.actions;

export default proposalSlice.reducer;

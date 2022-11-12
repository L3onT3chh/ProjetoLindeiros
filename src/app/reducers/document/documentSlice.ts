/* eslint-disable no-param-reassign */
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import {
  createDocuments,
  fetchDocumentsThunk,
} from "app/reducers/document/thunk";
import { IDataDocument } from "interfaces/data/document.interface";

const initialState: IDataDocument = {
  loading: false,
  document: [],
  error: "",
  documentSelect: undefined,
};

export const documentSlice = createSlice({
  name: "document",
  initialState,
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    builder.addCase(fetchDocumentsThunk.pending, (state: IDataDocument) => {
      state.loading = true;
    });
    builder.addCase(
      fetchDocumentsThunk.fulfilled,
      (state: IDataDocument, action) => {
        state.loading = false;
        state.document = action.payload;
        state.error = "";
      },
    );
    builder.addCase(
      fetchDocumentsThunk.rejected,
      (state: IDataDocument, action) => {
        state.loading = false;
        state.document = [];
        state.error = action.error.message?.toString() || "";
      },
    );
    builder.addCase(
      createDocuments.fulfilled,
      (state: IDataDocument, action) => {
        const { payload } = action;

        if (payload !== undefined) {
          state.loading = false;
          state.message = payload.message;
        }
      },
    );
  },
  reducers: {
    getDocument: () => {},
    selectDocument: (state: IDataDocument, action) => {
      state.documentSelect = action.payload;
    },
  },
});

export const { getDocument, selectDocument } = documentSlice.actions;

export default documentSlice.reducer;

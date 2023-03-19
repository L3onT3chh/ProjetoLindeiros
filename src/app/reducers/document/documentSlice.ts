/* eslint-disable no-param-reassign */
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import {
  createDocuments,
  deleteDocuments,
  fetchDocumentsThunk,
} from "app/reducers/document/thunk";
import { IDataDocument } from "interfaces/data/document.interface";

const initialState: IDataDocument = {
  loading: false,
  document: [],
  filtered: [],
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
        state.filtered = action.payload;
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
    builder.addCase(
      deleteDocuments.pending,
      (state: IDataDocument) => {
        state.loading = true;
      },
    );
    builder.addCase(
      deleteDocuments.fulfilled,
      (state: IDataDocument, action) => {
        const { payload } = action;

        let temp = state.document.filter(item => item.id != payload.idRemove);
        state.document = temp;
        state.loading = false;
      },
    );
  },
  reducers: {
    getDocument: () => { },
    selectDocument: (state: IDataDocument, action) => {
      state.documentSelect = action.payload;
    },
    refreshDocuments(state: IDataDocument, action) {
      let temp = action.payload;
      state.document = temp;
    },
    filterDocuments(state: IDataDocument, action) {
      const { payload } = action;

      let temp = state.document.filter((item) =>
        item.name.split('_')[0]
          .toLocaleLowerCase()
          .includes(payload.toLocaleLowerCase().trim()),
      );

      if(payload.length > 0){
        state.filtered = temp;
      }else{
        state.filtered = state.document;
      }
    }
  },
});

export const { getDocument, selectDocument, refreshDocuments, filterDocuments } = documentSlice.actions;

export default documentSlice.reducer;

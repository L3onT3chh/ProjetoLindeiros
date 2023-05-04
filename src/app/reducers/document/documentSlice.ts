/* eslint-disable no-param-reassign */
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import {
  createDocuments,
  deleteDocuments,
  fetchDocumentsThunk,
} from "app/reducers/document/thunk";
import { IDataDocument } from "interfaces/data/document.interface";
import { convertToArray } from "util/handleSelectorObj";

const initialState: IDataDocument = {
  loading: false,
  document: [],
  filtered: [],
  error: "",
  min: 0,
  max: 9,
  qtd: 15,
  offset: 15,
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
        convertToArray(action.payload).forEach((item, i) => {
          item.visible = false;

          if (i >= state.min && i < state.max) {
            item.visible = true;
          }
        })

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
    navigate: (state: IDataDocument, action) => {
      const {min, max} = action.payload;
      convertToArray(state.document).forEach((item, i) => {
        item.visible = false;

        if (i >= min && i < max) {
          item.visible = true;
        }
      })

      state.min = min;
      state.max = max;
      state.filtered = state.document;
    },
    selectDocument: (state: IDataDocument, action) => {
      state.documentSelect = action.payload;
    },
    refreshDocuments(state: IDataDocument, action) {
      let temp = action.payload;

      convertToArray(temp).forEach((item, i) => {
        item.visible = false;

        if (i >= 0 && i < 9) {
          item.visible = true;
        }
      })

      state.document = temp;
      state.filtered = temp;
    },
    appendDocuments(state: IDataDocument, action) {

      convertToArray(action.payload).forEach((item, i) => {
        item.visible = false;
        state.document.push(item);
        state.filtered.push(item);
      })

      state.filtered.forEach((item, i) => {
        item.visible = false;

        if (i >= state.min && i < state.max) {
          item.visible = true;
        }
      })

      state.document.forEach((item, i) => {
        item.visible = false;

        if (i >= state.min && i < state.max) {
          item.visible = true;
        }
      })
    },
    filterDocuments(state: IDataDocument, action) {
      let { min, max, text } = action.payload;
      console.log(action);
      let temp = state.document.filter((item) =>
        item.name.split('_')[0]
          .toLocaleLowerCase()
          .includes(text.toLocaleLowerCase().trim()),
      );

      convertToArray(temp).forEach((item, i) => {
        item.visible = false;

        if (i >= min && i < max) {
          item.visible = true;
        }
      })

      console.log(min);
      console.log(max);
      console.log(text);

      state.min = min;
      state.max = max;

      if (text.length > 0) {
        state.filtered = temp;
      } else {
        state.filtered = state.document;
      }
    }
  },
});

export const { getDocument, selectDocument, refreshDocuments, filterDocuments, navigate, appendDocuments } = documentSlice.actions;

export default documentSlice.reducer;

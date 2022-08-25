import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllDocument } from "API/Document/find.documents";

export const createDocuments = createAsyncThunk("", async () => {});

export const deleteDocuments = createAsyncThunk("", async () => {});

export const updateDocuments = createAsyncThunk("", async () => {});

export const findOneDocuments = createAsyncThunk("", async () => {});

export const fetchDocumentsThunk = createAsyncThunk(
  "document/fetchDocument",
  async () => {
    const document = await findAllDocument();
    return document;
  },
);

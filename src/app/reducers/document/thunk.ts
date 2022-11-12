import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllDocument } from "API/Document/find.documents";
import { IDocumentPost } from "interfaces/data/document.interface";
import documentCrud from "API/Document/crud.documents";

export const createDocuments = createAsyncThunk(
  "document/createDocument",
  async (documentPost: IDocumentPost) => {
    const document = await documentCrud.register(documentPost);
    return document;
  },
);

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

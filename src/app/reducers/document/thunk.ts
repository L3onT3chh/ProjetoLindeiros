import { createAsyncThunk } from "@reduxjs/toolkit";
import { DeleteDocuments, RegisterDocumenty } from "API/Document/crud.documents";
import { findAllDocument } from "API/Document/find.documents";
import { IDocumentPost } from "interfaces/data/document.interface";
import documentCrud from "API/Document/crud.documents";
// import documentCrud from "API/Document/crud.documents";

export const createDocuments = createAsyncThunk(
  "document/createDocument",
  async (documentPost: any) => {
    const document = await RegisterDocumenty(documentPost);
    return document;
  },
);

export const deleteDocuments = createAsyncThunk("document/deleteDocuments", async (id: string) => {
  const document = await documentCrud.delete(id);
  return document;
});

export const updateDocuments = createAsyncThunk("", async () => {});

export const findOneDocuments = createAsyncThunk("", async () => {});

export const fetchDocumentsThunk = createAsyncThunk(
  "document/fetchDocument",
  async () => {
    const document = await findAllDocument();
    return document;
  },
);

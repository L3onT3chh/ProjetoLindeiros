import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllDocument } from "API/Document/crud";
import { findAllDemands } from "../../API/Demand/crud";
import { findAllUsers } from "../../API/User/crud";

const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiOTNjMzJkNjItY2E4Mi00YTAyLTgyMTAtNWFlOGU4YzEwNGQxIn0.R6r9IwFcxgpB5dNd3jS0vI2zMLh7nbb9M0Ey5xWubxg";

export const fetchUsersThunk = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const users = await findAllUsers(TOKEN);
    return users;
  },
);

export const fetchDemandsThunk = createAsyncThunk(
  "demandas/fetchDemandas",
  async () => {
    const demand = await findAllDemands(TOKEN);
    return demand;
  },
);

// Action creators
export const fetchDocumentThunk = createAsyncThunk(
  "document/fetchDocument",
  async () => {
    const document = await findAllDocument();
    return document;
  },
);

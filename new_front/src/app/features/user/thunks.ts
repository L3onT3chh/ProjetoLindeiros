import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllUsers } from "../../../API/User/crud";

const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiOTNjMzJkNjItY2E4Mi00YTAyLTgyMTAtNWFlOGU4YzEwNGQxIn0.R6r9IwFcxgpB5dNd3jS0vI2zMLh7nbb9M0Ey5xWubxg";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  return findAllUsers(TOKEN);
});

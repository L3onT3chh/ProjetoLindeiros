import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllTypes } from "API/Types/find.types";
import { formatKeyTypes } from "../../../util/function";

export const createUserTypes = createAsyncThunk("", async () => {});

export const deleteUserTypes = createAsyncThunk("", async () => {});

export const updateUserTypes = createAsyncThunk("", async () => {});

export const findOneUserTypes = createAsyncThunk("", async () => {});

export const fetchTypesThunk = createAsyncThunk(
  "types/fetchTypes",
  async () => {
    const types = formatKeyTypes(await findAllTypes());
    return types;
  },
);

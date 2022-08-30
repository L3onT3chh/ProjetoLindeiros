import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllDemands } from "API/Demand/find.demand";

export const createDemandsThunk = createAsyncThunk("", async () => {});

export const deleteDemandsThunk = createAsyncThunk("", async () => {});

export const updateDemandsThunk = createAsyncThunk("", async () => {});

export const findOneDemandsThunk = createAsyncThunk("", async () => {});

export const fetchDemandsThunk = createAsyncThunk(
  "demandas/fetchDemandas",
  async () => {
    const demand = await findAllDemands();
    return demand;
  },
);

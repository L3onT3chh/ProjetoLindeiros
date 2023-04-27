import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllByUrl, findAllByUser, findAllDemands, findOneDemands } from "API/Demand/find.demand";
import { IDemandPost } from "interfaces/data/demand.interface";
import demandCrud from "API/Demand/crud.demand";
import { showErrorMessage } from "util/function";

export const deleteDemandsThunk = createAsyncThunk(
  "demandas/deleteDemands",
  async (id: string) => {
    const dem = await demandCrud.delete(id);
    showErrorMessage(dem.message, dem.status === 200 ? "success" : "error");
    return dem;
  },
);

export const updateDemandsThunk = createAsyncThunk("/demandas/updateDemand", async (demandData: IDemandPost) => {
  if (demandData.id) {
    const dem = await demandCrud.edit(demandData.id, demandData);
    showErrorMessage(dem.message, dem.status === 200 ? "success" : "error");
    const data = [];
    if (Array.isArray(dem.response) && dem.dataRequest) {
      data.push(
        dem.response.filter((item) =>
          item.name
            .toLocaleLowerCase()
            .includes(dem.dataRequest.toLocaleLowerCase()),
        )[0],
      );
    }
    return {
      ...dem,
      response: data || [],
    };
  }
});

export const findOneDemandsThunk = createAsyncThunk("demandas/fetchOneDemandas", async (id: string) => {
  const demand = await findOneDemands(id);

  return demand;
});

export const findAllByUsersThunk = createAsyncThunk("demandas/fetchAllByUser", async (id: string) => {  
  const demand = await findAllByUser(id);

  return demand;
});

export const findAllByUrlThunk = createAsyncThunk("demandas/fetchAllByUrl", async (url: string) => {  
  const demand = await findAllByUrl(url);

  return demand;
});

export const fetchDemandsThunk = createAsyncThunk(
  "demandas/fetchDemandas",
  async () => {
    const demand = await findAllDemands();
    console.log(demand);
    return demand;
  },
);

export const createDemandsThunk = createAsyncThunk(
  "demandas/createDemand",
  async (demandCreate: IDemandPost) => {
    const dem = await demandCrud.create(demandCreate);
    showErrorMessage(dem.message, dem.status === 200 ? "success" : "error");
    const data = [];
    if (Array.isArray(dem.response) && dem.dataRequest) {
      data.push(
        dem.response.filter((item) =>
          item.name
            .toLocaleLowerCase()
            .includes(dem.dataRequest.toLocaleLowerCase()),
        )[0],
      );
    }
    return {
      ...dem,
      response: data || [],
    };
  },
);

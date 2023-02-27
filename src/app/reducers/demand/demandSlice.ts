/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import {
  updateDemandsThunk,
  createDemandsThunk,
  deleteDemandsThunk,
  fetchDemandsThunk,
} from "app/reducers/demand/thunk";
import { IStateData } from "interfaces/components.interface";
import { IDataDemand, IDemand } from "interfaces/data/demand.interface";

export const initialState: IDataDemand = {
  demandFilter: {
    city: [],
    axes: [],
    filtered: [],
    search: [],
    clicked: undefined,
  },
  loading: false,
  demand: [],
  error: "",
  message: "",
};

export const demandSlice = createSlice({
  name: "demand",
  initialState,
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    builder.addCase(
      fetchDemandsThunk.fulfilled,
      (state: IDataDemand, action) => {
        state.demand = action.payload;
        state.loading = false;
        state.error = "";
      },
    );
    builder.addCase(fetchDemandsThunk.pending, (state: IDataDemand) => {
      state.demand = [];
      state.loading = true;
      state.error = "";
    });
    builder.addCase(
      fetchDemandsThunk.rejected,
      (state: IDataDemand, action) => {
        state.loading = false;
        state.demand = [];
        state.error = action.error.message?.toString() || "";
      },
    );
    builder.addCase(
      createDemandsThunk.fulfilled,
      (state: IDataDemand, action) => {
        if (action.payload.status === 200 && action.payload.response) {
          state.demand.push(action.payload.response[0]);
        }
        state.loading = false;
      },
    );
    builder.addCase(createDemandsThunk.pending, (state: IDataDemand) => {
      state.loading = true;
    });
    builder.addCase(
      updateDemandsThunk.fulfilled,
      (state: IDataDemand, action) => {
        if (action.payload && action.payload.status === 200 && action.payload.response) {
          let id = action.payload.response[0].id;
          let index:any = state.demand.findIndex((item) => item.id === id);
          
          state.demand.splice(index, 1, action.payload.response[0]);
        }
        state.loading = false;
      },
    );
    builder.addCase(updateDemandsThunk.pending, (state: IDataDemand) => {
      state.loading = true;
    });
    builder.addCase(
      deleteDemandsThunk.fulfilled,
      (state: IDataDemand, action) => {
        state.loading = false;
        if (action.payload.status === 200) {
          const { idRemove } = action.payload;
          const dataTemp = state.demand.filter((item) => item.id !== idRemove);
          state.demand = dataTemp;
        }
      },
    );
    builder.addCase(deleteDemandsThunk.pending, (state: IDataDemand) => {
      state.loading = true;
    });
  },
  reducers: {
    addDemand: () => { },
    removeDemand: () => { },
    filterAxes: (state: IDataDemand, action) => {
      let filter: IDemand[] = state.demand.filter(
        (item: IDemand) =>
          item.Axes.name.toLocaleLowerCase().trim() ===
          action.payload.axes.toLocaleLowerCase().trim() && item,
      );
      if (action.payload.city && !action.payload.city.includes("Tod")) {
        filter = filter.filter(
          (item) =>
            item.Cities.name.toLocaleLowerCase().trim() ===
            action.payload.city.toLocaleLowerCase().trim() && item,
        );
      }
      state.demandFilter.axes = filter;
    },
    filterCity: (state: IDataDemand, action) => {
      let arrayA: IDemand[] = state.demand.filter(
        (item: IDemand) =>
          item.Cities.name.toLocaleLowerCase().trim() ===
          action.payload.city.toLocaleLowerCase().trim() && item,
      );
      if (action.payload.axes && !action.payload.axes.includes("Tod")) {
        arrayA = arrayA.filter(
          (item) =>
            item.Axes.name.toLocaleLowerCase().trim() ===
            action.payload.axes.toLocaleLowerCase().trim() && item,
        );
      }
      state.demandFilter.city = arrayA;
    },
    filterSearch: (state: IDataDemand, action) => {
      const filter = state.demand.filter((item: IDemand) =>
          item.name
            .toLocaleLowerCase()
            .match(action.payload.toLocaleLowerCase().trim()) && item,
      );
      state.demandFilter.search = filter;
    },
    clickedDemand: (state: IDataDemand, action) => {
      state.demandFilter.clicked = state.demand.filter(
        (item) => item.id === action.payload,
      )[0];
    },
    mergeDemandFilter: (state: IDataDemand) => {
      const { city, axes, search } = state.demandFilter;
      const arr = [...city, ...axes, ...search];
      const data = arr.filter(
        (ele, index, self) => index === self.indexOf(ele),
      );
      state.demandFilter = {
        ...state.demandFilter,
        filtered: [...data],
      };
    },
  },
});

export const {
  addDemand,
  filterAxes,
  filterCity,
  mergeDemandFilter,
  clickedDemand,
  filterSearch,
} = demandSlice.actions;

export default demandSlice.reducer;

export const selectCurrentDemands = (state: IStateData) => state.demands;

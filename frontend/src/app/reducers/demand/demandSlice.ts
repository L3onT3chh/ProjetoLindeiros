/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import {
  createDemandsThunk,
  deleteDemandsThunk,
  fetchDemandsThunk,
} from "app/reducers/demand/thunk";
import { IDataDemand, IDemand } from "interfaces/data/demand.interface";

const initialState: IDataDemand = {
  demandFilter: {
    city: [],
    axes: [],
    filtered: [],
    search: [],
    status: [],
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
        state.loading = false;
        if (action.payload.status === 200 && action.payload.response) {
          state.demand.push(action.payload.response[0]);
        }
      },
    );
    builder.addCase(createDemandsThunk.pending, (state: IDataDemand) => {
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
    addDemand: () => {},
    removeDemand: () => {},
    filterAxes: (state: IDataDemand, action) => {
      state.demandFilter.axes = state.demand.filter(
        (item: IDemand) =>
          item.Axes.name.toLocaleLowerCase().trim() ===
          action.payload.toLocaleLowerCase().trim(),
      );
    },
    filterCity: (state: IDataDemand, action) => {
      state.demandFilter.city = state.demand.filter(
        (item: IDemand) =>
          item.Cities.name.toLocaleLowerCase().trim() ===
          action.payload.toLocaleLowerCase().trim(),
      );
    },
    filterStatus: (state: IDataDemand, action) => {
      const { payload } = action;
      state.demandFilter.status = state.demand.filter(
        (item: IDemand) =>
          item.status === payload.a ||
          item.status === payload.b ||
          (item.status === payload.c && item),
      );
    },
    filterSearch: (state: IDataDemand, action) => {
      state.demandFilter.search =
        action.payload !== " "
          ? state.demand.filter(
              (item: IDemand) =>
                item.name
                  .toLocaleLowerCase()
                  .includes(action.payload.toLocaleLowerCase().trim()) && item,
            )
          : [];
    },
    clickedDemand: (state: IDataDemand, action) => {
      state.demandFilter.clicked = state.demand.filter(
        (item) => item.id === action.payload.id,
      )[0];
    },
    mergeDemandFilter: (state: IDataDemand) => {
      const { city, axes, search, status } = state.demandFilter;
      state.demandFilter = {
        ...state.demandFilter,
        filtered: [...city, ...axes, ...search, ...status],
      };
    },
  },
});

export const {
  filterStatus,
  addDemand,
  filterAxes,
  filterCity,
  mergeDemandFilter,
  clickedDemand,
  filterSearch,
} = demandSlice.actions;

export default demandSlice.reducer;

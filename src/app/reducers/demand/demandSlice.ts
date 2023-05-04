import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import {
  updateDemandsThunk,
  createDemandsThunk,
  deleteDemandsThunk,
  fetchDemandsThunk,
  findOneDemandsThunk,
  findAllByUsersThunk,
  findAllByIdThunk,
  myRelatedDemand,
} from "app/reducers/demand/thunk";
import { IStateData } from "interfaces/components.interface";
import { IDataDemand, IDemand } from "interfaces/data/demand.interface";
import { convertToArray } from "util/handleSelectorObj";

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
  fullDemand: [],
  item: [],
  error: "",
  message: "",
  status: 0
};

export const demandSlice = createSlice({
  name: "demand",
  initialState,
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    builder.addCase(
      myRelatedDemand.fulfilled,
      (state: IDataDemand, action) => {
        if (action.payload) {
          state.item = convertToArray(action.payload.response);
        }
        state.loading = false;
        state.error = "";
      },
    );
    builder.addCase(
      myRelatedDemand.pending,
      (state: IDataDemand) => {
        state.loading = true;
      },
    );
    builder.addCase(
      findAllByUsersThunk.fulfilled,
      (state: IDataDemand, action) => {
        if (action.payload) {
          state.demand = convertToArray(action.payload);
          state.fullDemand = convertToArray(action.payload);
        }
        state.loading = false;
        state.error = "";
      },
    );
    builder.addCase(
      fetchDemandsThunk.fulfilled,
      (state: IDataDemand, action) => {
        state.demand = convertToArray(action.payload);
        state.fullDemand = convertToArray(action.payload);
        state.loading = false;
        state.error = "";
        console.log(convertToArray(action.payload));
      },
    );
    builder.addCase(
      findAllByIdThunk.fulfilled,
      (state: IDataDemand, action) => {
        console.log(convertToArray(action.payload.response))
        state.item = convertToArray(action.payload.response);
        state.loading = false;
        state.status = action.payload.status;
        state.error = "";
      },
    );
    builder.addCase(
      findAllByIdThunk.pending,
      (state: IDataDemand) => {
        state.loading = true;
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
          state.fullDemand.push(action.payload.response[0]);
        }
        state.loading = false;
        state.status = action.payload.status;
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
          let index: any = state.demand.findIndex((item) => item.id === id);

          state.demand.splice(index, 1, action.payload.response[0]);
          state.fullDemand.splice(index, 1, action.payload.response[0]);
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
          state.fullDemand = dataTemp;
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
    cleanDemand: (state: IDataDemand) => {
      state.loading = true;
      state.demand = [];
      state.fullDemand = [];
    },
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
    filterAll: (state: IDataDemand, action) => {
      let { payload } = action;

      let temp = state.fullDemand;
      let cityEmpty = (payload.citySelector.length == 0 || payload.citySelector == "none");
      let axesEmpty = (payload.axesSelector.length == 0 || payload.axesSelector == "none");

      if (!cityEmpty) {
        temp = temp.filter((demand) => demand.Cities.id === payload.citySelector);
      }

      if (!axesEmpty) {
        temp = temp.filter((demand) => demand.Axes.id === payload.axesSelector);
      }

      if (payload.searchSelector.length > 0) {
        temp = temp.filter((demand) => demand.name.toLocaleLowerCase()
          .includes(payload.searchSelector.toLocaleLowerCase()));
      }

      if (payload.stateSelector.length > 0) {
        temp = temp.filter((demand) => demand.status === payload.stateSelector);
      }

      if (cityEmpty && axesEmpty && payload.searchSelector.length == 0 && payload.stateSelector.length == 0) {
        temp = state.fullDemand;
      }

      state.demand = temp;
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
    cleanItem: (state: IDataDemand) => {
      state.status = 0;
      state.item = [];
    }
  },
});

export const {
  addDemand,
  filterAxes,
  filterCity,
  mergeDemandFilter,
  clickedDemand,
  filterSearch,
  filterAll,
  cleanDemand,
  cleanItem
} = demandSlice.actions;

export default demandSlice.reducer;

export const selectCurrentDemands = (state: IStateData) => state.demands;
export const demandLoading = (state: IStateData) => state.demands.loading;
export const demandStatus = (state: IStateData) => state.demands.status;
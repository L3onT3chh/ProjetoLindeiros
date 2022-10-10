/* eslint-disable no-param-reassign */
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { fetchCitysThunk } from "app/reducers/city/thunk";
import { IDataCity } from "interfaces/data/city.interface";

const initialState: IDataCity = {
  city_selector: "",
  loading: false,
  city: [],
  error: "",
  message: "",
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    builder.addCase(fetchCitysThunk.pending, (state: IDataCity) => {
      state.loading = true;
    });
    builder.addCase(fetchCitysThunk.fulfilled, (state: IDataCity, action) => {
      const { payload } = action;
      state.loading = false;
      if (payload) {
        state.city = payload.response;
      }
      state.error = "";
    });
    builder.addCase(fetchCitysThunk.rejected, (state: IDataCity, action) => {
      state.loading = false;
      state.error = action.error.message?.toString() || "";
    });
  },
  reducers: {
    getCity: () => {},
    setCitySelected: (state: IDataCity, action) => {
      state.city_selector = action.payload;
    },
  },
});

export const { getCity, setCitySelected } = citySlice.actions;

export default citySlice.reducer;

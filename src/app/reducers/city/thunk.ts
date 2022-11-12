import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllCities } from "API/City/find.city";

export const fetchCitysThunk = createAsyncThunk("city/fetchCity", async () => {
  const cities = await findAllCities();
  return cities;
});

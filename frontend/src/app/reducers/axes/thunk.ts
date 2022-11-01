import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllAxes } from "API/Axes/find.axes";

export const fetchAxesThunk = createAsyncThunk("axes/fetchAxes", async () => {
  const axes = await findAllAxes();
  return axes;
});

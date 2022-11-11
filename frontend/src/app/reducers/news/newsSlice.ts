/* eslint-disable no-param-reassign */
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { createNewssThunk, fetchNewssThunk } from "app/reducers/news/thunk";
import { IDataNews } from "interfaces/data/news.interface";

const initialState: IDataNews = {
  loading: false,
  filters: {
    lastNews: [],
  },
  news: [],
  error: "",
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    builder.addCase(fetchNewssThunk.pending, (state: IDataNews) => {
      state.loading = true;
    });
    builder.addCase(fetchNewssThunk.fulfilled, (state: IDataNews, action) => {
      const { payload } = action;
      state.loading = false;
      if (payload?.status === 200) {
        state.news = payload.response;
        state.error = "";
      }
    });
    builder.addCase(fetchNewssThunk.rejected, (state: IDataNews, action) => {
      state.loading = false;
      state.news = [];
      state.error = action.error.message?.toString() || "";
    });

    builder.addCase(createNewssThunk.fulfilled, (state: IDataNews, action) => {
      const { payload } = action;

      if (payload !== undefined) {
        state.loading = false;
        state.message = payload.message;
      }
    });
  },
  reducers: {
    getNews: () => {},
  },
});

export const { getNews } = newsSlice.actions;

export default newsSlice.reducer;

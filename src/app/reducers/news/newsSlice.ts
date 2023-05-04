/* eslint-disable no-param-reassign */
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { deleteNewssThunk, fetchNewssThunk, findOneNewssThunk } from "app/reducers/news/thunk";
import { IDataNews } from "interfaces/data/news.interface";

const initialState: IDataNews = {
  loading: false,
  filters: {
    lastNews: [],
  },
  news: [],
  fullNews: [],
  item: undefined,
  error: "",
  status: 0
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
        state.fullNews = payload.response;
        state.error = "";
      }
    });
    builder.addCase(fetchNewssThunk.rejected, (state: IDataNews, action) => {
      state.loading = false;
      state.news = [];
      state.error = action.error.message?.toString() || "";
    });
    builder.addCase(deleteNewssThunk.fulfilled, (state: IDataNews, action) => {
      const { payload } = action;
      state.loading = false;
      if (payload?.status === 200) {
        let temp = state.news.filter(item => item.id !== payload.id);
        state.news = temp;
        state.fullNews = temp;
      }
    });
    builder.addCase(deleteNewssThunk.pending, (state: IDataNews) => {
      state.loading = true;
    });
    builder.addCase(findOneNewssThunk.pending, (state: IDataNews) => {
      state.loading = true;
    });
    builder.addCase(findOneNewssThunk.fulfilled, (state: IDataNews, action) => {
      const { payload } = action;
      state.loading = false;
      state.item = undefined;

      if (payload) {
        state.status = payload.status;

        if (payload.status === 200) {
          state.item = payload.response;
        }
      }
    });

    // builder.addCase(createNewssThunk.fulfilled, (state: IDataNews, action) => {
    //   const { payload } = action;

    //   if (payload !== undefined) {
    //     state.loading = false;
    //     state.message = payload.message;
    //   }
    // });
  },
  reducers: {
    getNews: () => { },
    filterNews: (state: IDataNews, action) =>{
      let { payload } = action;
      console.log(payload);

      let temp = state.fullNews;

      if (payload.searchSelector.length > 0) {
        temp = temp.filter((news) => news.title.toLocaleLowerCase()
          .includes(payload.searchSelector.toLocaleLowerCase()));
      }

      if (payload.searchSelector.length === 0) {
        temp = state.fullNews;
      }

      state.news = temp;
    }
  },
});

export const { getNews, filterNews } = newsSlice.actions;

export default newsSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllNews } from "API/News/find.news";
import { INewsPost } from "interfaces/data/news.interface";
// import newsCrud from "API/News/crud.news";
import { showErrorMessage } from "util/function";

// export const createNewssThunk = createAsyncThunk(
//   "",
//   async (newsPost: INewsPost) => {
//     const news = await newsCrud.register(newsPost);
//     showErrorMessage(news.message, news.status === 200 ? "success" : "error");
//     return news;
//   },
// );

export const deleteNewssThunk = createAsyncThunk("", async () => {});

export const updateNewssThunk = createAsyncThunk("", async () => {});

export const findOneNewssThunk = createAsyncThunk("", async () => {});

export const fetchNewssThunk = createAsyncThunk("news/fetchNews", async () => {
  const news = await findAllNews();
  return news;
});

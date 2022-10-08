/* eslint-disable @typescript-eslint/no-unused-vars */
import userLogin from "API/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUserLogin } from "interfaces/data/user.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { logout, setCredentials } from "app/reducers/auth/authSlice";

export const authLoginThunk = createAsyncThunk(
  "users/auth",
  async ({ username, password }: IUserLogin) => {
    const response = await userLogin.login({ username, password });
    return response;
  },
);

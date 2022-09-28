import userLogin from "API/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUserLogin } from "interfaces/data/user.interface";

export const authLoginThunk = createAsyncThunk(
  "users/auth",
  async ({ username, password }: IUserLogin) => {
    const response = await userLogin.login({ username, password });
    return response;
  },
);

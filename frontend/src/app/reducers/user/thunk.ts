import { IUser } from "interfaces/data/user.interface";
/* eslint-disable consistent-return */
import { createAsyncThunk } from "@reduxjs/toolkit";
import userCrud from "API/User/crud.user";
import { findAllUsers } from "API/User/find.user";
import { IUserPost } from "../../../interfaces/data/user.interface";

export const createUserThunk = createAsyncThunk(
  "users/create",
  async (user: IUserPost) => {
    const response = await userCrud.register(user);
    return response;
  },
);

export const deleteUserThunk = createAsyncThunk("", async (id: string) => {
  const response = await userCrud.delete(id);
  return response;
});

export const updateUserThunk = createAsyncThunk("", async (user: IUser) => {
  const response = await userCrud.update(user);
  return response;
});

export const fetchUsersThunk = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const users = await findAllUsers();
    console.log(users);
    return users;
  },
);

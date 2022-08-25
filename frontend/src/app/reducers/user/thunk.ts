import { createAsyncThunk } from "@reduxjs/toolkit";
import userCrud from "API/User/crud.user";
import { findAllUsers } from "API/User/find.user";
import { TOKEN } from "config";
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

export const updateUserThunk = createAsyncThunk("", async () => {
  const response = await userCrud.update();
  return response;
});

export const findOneUserThunk = createAsyncThunk("", async () => {
  // const response = await userCrud.findOne();
});

export const fetchUsersThunk = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const users = await findAllUsers(TOKEN);
    return users;
  },
);

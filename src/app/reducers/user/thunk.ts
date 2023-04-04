import { IUser, IUserPostEdit } from "interfaces/data/user.interface";
/* eslint-disable consistent-return */
import { createAsyncThunk } from "@reduxjs/toolkit";
import userCrud, { createUserRequest } from "API/User/crud.user";
import { findAllUsers, findRequestUser } from "API/User/find.user";
import { showErrorMessage } from "util/function";
import { IUserPost } from "../../../interfaces/data/user.interface";

export const createUserThunk = createAsyncThunk(
  "users/create",
  async (user: IUserPost) => {
    const response = await userCrud.register(user);
    showErrorMessage(
      response.message,
      response.status === 200 ? "success" : "error",
    );
    return response;
  },
);

export const createUserRequestThunk = createAsyncThunk(
  "users/createUserRequest",
  async (user: any) => {
    const response = await createUserRequest(user);
    showErrorMessage(
      response.message,
      response.status === 200 ? "success" : "error",
    );
    return response;
  },
);

export const deleteUserThunk = createAsyncThunk("", async (id: string) => {
  const response = await userCrud.delete(id);
  showErrorMessage(
    response.message,
    response.status === 200 ? "success" : "error",
  );
  return response;
});

export const updateUserThunk = createAsyncThunk("users/update", async (user: IUserPostEdit) => {
  const response = await userCrud.update(user);
  showErrorMessage(
    response.message,
    response.status === 200 ? "success" : "error",
  );
  return response;
});

export const fetchUsersThunk = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const users = await findAllUsers();
    return users;
  },
);

export const fetchRequestUsersThunk = createAsyncThunk(
  "users/fetchRequestUsers",
  async () => {
    const users = await findRequestUser();
    return users;
  },
);

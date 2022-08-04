/* eslint-disable no-param-reassign */
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "app/features/user/thunks";
import { IResponseData } from "interfaces/global.interface";
import { IUserState } from "../../../interfaces/components.interface";

interface IData extends IResponseData {
  users: IUserState[] | undefined;
}

const initialState: IData = {
  loading: false,
  users: [],
  error: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    builder.addCase(fetchUsers.pending, (state: IData) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state: IData, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state: IData, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message?.toString() || "";
    });
  },
  reducers: {
    getInfo: () => {},
    deleteUser: () => {},
    updateUser: () => {},
  },
});

export const { getInfo, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;

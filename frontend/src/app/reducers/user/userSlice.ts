/* eslint-disable no-param-reassign */
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { fetchUsersThunk } from "app/reducers/thunks";
import { IDataUser } from "interfaces/data/user.interface";

const initialState: IDataUser = {
  loading: false,
  users: [],
  error: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    builder.addCase(fetchUsersThunk.pending, (state: IDataUser) => {
      state.loading = true;
    });
    builder.addCase(fetchUsersThunk.fulfilled, (state: IDataUser, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsersThunk.rejected, (state: IDataUser, action) => {
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

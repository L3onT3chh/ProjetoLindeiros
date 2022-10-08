/* eslint-disable no-param-reassign */
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { authLoginThunk } from "app/reducers/auth/thunk";
import { IDataAuth } from "interfaces/data/auth.interface";

const initialState: IDataAuth = {
  auth: {
    jwt: "",
    user: undefined,
    tryLogin: false,
  },
  error: "",
  loading: false,
  message: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    builder.addCase(authLoginThunk.fulfilled, (state: IDataAuth, action) => {
      const { payload } = action;

      const token = payload.response.replaceAll('"', "");
      state.loading = false;
      if (payload.status === 200) {
        state.error = "";
        state.auth.jwt = token;
        state.message = "Login realizado com sucesso!";
        state.auth.user = payload.user;
        localStorage.setItem("tokeAuth", token);
      } else {
        state.auth.jwt = "";
        state.error = payload.response;
        state.auth.tryLogin = true;
      }
    });

    builder.addCase(authLoginThunk.rejected, (state: IDataAuth) => {
      state.loading = false;
      state.error = "Não foi possível realizar o login";
      state.message = "";
      state.auth.tryLogin = true;
    });

    builder.addCase(authLoginThunk.pending, (state: IDataAuth) => {
      state.auth.tryLogin = false;
      state.loading = true;
    });
  },
  reducers: {
    getToken: () => {},
    setCredentials: (state: IDataAuth, action) => {
      const { user, token } = action.payload;
      state.auth.jwt = token;
      state.auth.user = user;
    },
    logout: (state: IDataAuth) => {
      state.auth.jwt = "";
      state.auth.user = undefined;
    },
  },
});

export const { setCredentials, getToken, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurentUser = (state: IDataAuth) => state.auth.user;

export const selectCurrentToken = (state: IDataAuth) => state.auth.jwt;

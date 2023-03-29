/* eslint-disable no-param-reassign */
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { authLoginThunk } from "app/reducers/auth/thunk";
import { IStateData } from "interfaces/components.interface";
import { IDataAuth } from "interfaces/data/auth.interface";
import { showErrorMessage } from "util/function";
import { convertToArray } from "util/handleSelectorObj";

const initialState: IDataAuth = {
  auth: {
    jwt: "",
    user: [],
    tryLogin: false,
    logged: false,
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

      if (payload.status === 200) {
        state.auth.user = convertToArray(payload.user);
        state.auth.logged = true;
        state.auth.jwt = payload.response;
        localStorage.setItem("token_jwt", payload.response);
        showErrorMessage("Usuário autenticado com sucesso!", "success");
        console.log(state.auth.jwt);
        console.log(state.auth.logged);
      } else {
        state.auth.logged = false;
        localStorage.clear();
        state.auth.user = [];
        showErrorMessage("Usuário inválido", "error");
      }
    });
  },
  reducers: {
    login: (state: IDataAuth, action) => {
      state.auth.user = action.payload;
    },
    logout: (state: IDataAuth) => {
      state.auth.user = undefined;
      state.auth.jwt = "";
      state.auth.logged = false;
      localStorage.clear();
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

export const selectCurentUser = (state: IStateData) => [
  state.auth.auth.user,
  state.auth.auth.logged,
];

export const selectUserLogged = (state: IStateData) => state.auth.auth.user;

export const selectCurrentToken = (state: IStateData) => state.auth.auth.jwt;

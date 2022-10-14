/* eslint-disable no-param-reassign */
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { authLoginThunk, validateTokenThunk } from "app/reducers/auth/thunk";
import { IDataAuth } from "interfaces/data/auth.interface";

const initialState: IDataAuth = {
  auth: {
    jwt: "",
    user: undefined,
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

      const token = payload.response.replaceAll('"', "");
      if (payload.status === 200) {
        state.error = "";
        state.auth.jwt = token;
        state.message = "Login realizado com sucesso!";
        state.auth.user = payload.user;
        localStorage.setItem("token_jwt", token);
        state.auth.logged = true;
        state.auth.tryLogin = true;
      } else {
        state.auth.jwt = "";
        state.error = payload.response;
        state.auth.tryLogin = true;
        state.auth.logged = false;
      }
      state.loading = false;
    });

    builder.addCase(authLoginThunk.rejected, (state: IDataAuth) => {
      state.loading = false;
      state.error = "Não foi possível realizar o login";
      state.message = "";
      state.auth.logged = false;
      state.auth.tryLogin = true;
    });

    builder.addCase(authLoginThunk.pending, (state: IDataAuth) => {
      state.loading = true;
    });

    builder.addCase(
      validateTokenThunk.fulfilled,
      (state: IDataAuth, action) => {
        const { payload } = action;

        if (payload.status === 200) {
          state.error = "";
          state.auth.user = payload.response;
          state.message = payload.message;
        } else {
          state.error = payload.response;
        }
        state.loading = false;
      },
    );

    builder.addCase(validateTokenThunk.pending, (state: IDataAuth) => {
      state.loading = true;
    });

    builder.addCase(validateTokenThunk.rejected, (state: IDataAuth, action) => {
      state.loading = false;
      state.error = action.error.message?.toString() || "";
    });
  },
  reducers: {
    verifyLogin: () => {
      // state.auth.logged = ;
    },
    setCredentials: (state: IDataAuth, action) => {
      const { user, token } = action.payload;
      state.auth.jwt = token;
      state.auth.user = user;
    },
  },
});

export const { setCredentials, verifyLogin } = authSlice.actions;

export default authSlice.reducer;

export const selectCurentUser = (state: IDataAuth) => state.auth.user;

export const selectCurrentToken = (state: IDataAuth) => state.auth.jwt;

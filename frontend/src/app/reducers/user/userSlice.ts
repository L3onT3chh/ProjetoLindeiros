/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import {
  createUserThunk,
  deleteUserThunk,
  fetchUsersThunk,
  // updateUserThunk,
  // deleteUserThunk,
} from "app/reducers/user/thunk";
import { IDataUser, IUser } from "interfaces/data/user.interface";

const initialState: IDataUser = {
  tryLogin: false,
  filters: {
    merge: [],
    type: [],
    city: [],
    search: [],
    clicked: undefined,
  },
  loading: false,
  users: [],
  error: "",
  message: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
    builder.addCase(fetchUsersThunk.pending, (state: IDataUser) => {
      state.loading = true;
    });
    builder.addCase(fetchUsersThunk.fulfilled, (state: IDataUser, action) => {
      const { payload } = action;
      if (payload !== undefined) {
        state.users = payload.response;
      }
      state.loading = false;
      state.error = "";
    });
    builder.addCase(fetchUsersThunk.rejected, (state: IDataUser, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message?.toString() || "";
    });
    // CRUD users
    builder.addCase(createUserThunk.fulfilled, (state: IDataUser, action) => {
      const { payload } = action;

      if (payload !== undefined) {
        state.loading = false;
        state.message = payload.message;
      }
    });
    builder.addCase(deleteUserThunk.fulfilled, (state: IDataUser, action) => {
      const { payload } = action;

      if (payload !== undefined && payload.idRemove) {
        state.loading = true;
        const dataAux: IUser[] = state.users.filter(
          (user: IUser) => user.name !== payload.idRemove,
        );
        if (dataAux.length > 0) {
          state.loading = false;
          state.users = dataAux;
        }
      }
    });
    // builder.addCase(updateUserThunk.fulfilled, (state: IDataUser, actions) => {
    //   const { payload } = actions;

    //   if (payload !== undefined) {
    //     state.loading = false;

    //     const dataAux: IUser[] = state.users.filter(
    //       (item) => item.name !== payload.response.name,
    //     );

    //     if (dataAux.length > 0) {
    //       state.users = dataAux;
    //     }
    //     state.loading = false;
    //   }
    // });
  },
  reducers: {
    getInfo: () => {},
    filterTypeUser: (state: IDataUser, action) => {
      state.filters.type = state.users.filter(
        (user) => user.userType.trim() === action.payload.trim(),
      );
    },
    filterCity: (state: IDataUser, action) => {
      state.filters.city = state.users.filter(
        (user) => user.city.trim() === action.payload.trim(),
      );
    },
    filterSearch: (state: IDataUser, action) => {
      state.filters.search = state.users.filter((user) =>
        user.name
          .toLocaleLowerCase()
          .includes(action.payload.toLocaleLowerCase().trim()),
      );
    },
    mergeFilters: (state: IDataUser) => {
      const { city, type, search } = state.filters;
      const arrayNew = [...city, ...type, ...search];

      if (arrayNew.length > 0) {
        state.filters = {
          ...state.filters,
          merge: [...city, ...type, ...search],
        };
      } else {
        state.filters = {
          ...state.filters,
          merge: [...state.users],
        };
      }
    },
    filterClicked: (state: IDataUser, action) => {
      const { payload } = action;

      state.filters.clicked = state.users.filter(
        (user) => user.id === payload,
      )[0];
    },
    deleteUser: () => {},
    updateUser: () => {},
  },
});

export const {
  getInfo,
  updateUser,
  deleteUser,
  filterTypeUser,
  filterCity,
  filterSearch,
  mergeFilters,
} = userSlice.actions;

export default userSlice.reducer;

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
import { IStateData } from "interfaces/components.interface";
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
  touched: false,
  typeMessage: "",
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
      state.typeMessage = ``;
      if (payload !== undefined) {
        console.log(payload.status);
        state.typeMessage = `${payload.status}`;
        state.loading = false;
        state.message = payload.message;
      }
    });
    builder.addCase(deleteUserThunk.fulfilled, (state: IDataUser, action) => {
      const { payload } = action;
      if (payload.idRemove) {
        state.loading = true;
        const dataAux: IUser[] = state.users.filter(
          (user: IUser) => user.id !== payload.idRemove,
        );
        state.users = dataAux;
        if (dataAux.length > 0) {
          state.loading = false;
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
    getInfo: () => { },
    filterTypeUser: (state: IDataUser, action) => {
      let filter = [];
      if (state.filters.merge.length == 0) {
        filter = state.users.filter(
          (user) => user.userType.trim() === action.payload.trim(),
        );
      } else {
        filter = state.filters.merge.filter(
          (user) => user.userType.trim() === action.payload.trim(),
        );
      }

      state.touched = true;
      state.filters.merge = filter;
    },
    filterCity: (state: IDataUser, action) => {
      let filter = [];
      if (state.filters.merge.length == 0) {
        filter = state.users.filter(
          (user) => user.city.trim() === action.payload.trim(),
        );
      } else {
        filter = state.filters.merge.filter(
          (user) => user.city.trim() === action.payload.trim(),
        );
      }

      state.touched = true;
      state.filters.merge = filter;
    },
    filterSearch: (state: IDataUser, action) => {
      let filter = [];
      if (state.filters.merge.length == 0 || action.payload.length == 0) {
        filter = state.users.filter((user) =>
          user.name
            .toLocaleLowerCase()
            .includes(action.payload.toLocaleLowerCase().trim()),
        );
      } else {
        filter = state.filters.merge.filter((user) =>
          user.name
            .toLocaleLowerCase()
            .includes(action.payload.toLocaleLowerCase().trim()),
        );
      }

      state.touched = true;
      state.filters.merge = filter;
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
    cleanFilters: (state: IDataUser) => {
      state.filters = {
        ...state.filters,
        merge: [],
        search: [],
        city: [],
        type: []
      }

      state.touched = false;
      state.filters.merge = state.users;
    },
    filterClicked: (state: IDataUser, action) => {
      const { payload } = action;

      state.filters.clicked = state.users.filter(
        (user) => user.id === payload,
      )[0];
    },
    deleteUser: () => { },
    updateUser: () => { },
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
  cleanFilters,
} = userSlice.actions;

export default userSlice.reducer;

export const selectUsersMessage = (state: IStateData) => state.users;
;

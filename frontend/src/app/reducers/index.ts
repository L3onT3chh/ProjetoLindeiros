import { fetchTypesThunk } from "app/reducers/userTypes/thunks";
import { fetchUsersThunk } from "app/reducers/user/thunk";
import { fetchDemandsThunk } from "app/reducers/demand/thunk";
import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";
import { fetchDocumentsThunk } from "./document/thunk";
import documentReducer from "./document/documentSlice";
import usersReducer from "./user/userSlice";
import demandReducer from "./demand/demandSlice";
import userTypesReducer from "./userTypes/userTypes";

const rootReducer = combineReducers({
  users: usersReducer,
  demands: demandReducer,
  documents: documentReducer,
  loadingBar: loadingBarReducer,
  // proposals: proposalSlice,
  userTypes: userTypesReducer,
});

export {
  fetchDocumentsThunk,
  fetchDemandsThunk,
  fetchUsersThunk,
  fetchTypesThunk,
};

export default rootReducer;

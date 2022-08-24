import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";
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

export default rootReducer;

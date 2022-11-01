import storage from "redux-persist/lib/storage";

export const persistConfig = (key: string) => {
  return {
    key,
    storage,
  };
};

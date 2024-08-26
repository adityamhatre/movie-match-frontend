import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import listSlice from "./slices/listSlice";
import loggedInSlice from "./slices/loggedInSlice";
import pageSlice from "./slices/pageSlice";
import pairingKeySlice from "./slices/pairingKeySlice";

const persistConfig = {
  key: "root",
  storage,
};

const combinedReducers = combineReducers({
  loggedIn: loggedInSlice,
  list: listSlice,
  page: pageSlice,
  pairingKey: pairingKeySlice,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

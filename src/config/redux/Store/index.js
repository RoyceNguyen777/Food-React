import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist/es/constants";
import storage from "redux-persist/lib/storage";
import MainListSlice from "../MainListSlice/index";
import PersonSilce from "../PersonSilce";
import MoneySilce from "../PriceSlice";

const rootpersistConfig = {
  key: "root",
  storage,
  whilelist: ["person", "allist", "money"],
};

const rootReducer = combineReducers({
  person: PersonSilce,
  allist: MainListSlice,
  money: MoneySilce,
});

const persistedReducer = persistReducer(rootpersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

export default store;

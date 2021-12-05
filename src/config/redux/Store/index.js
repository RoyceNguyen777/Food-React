import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist/es/constants";
import storage from 'redux-persist/lib/storage';
import MainListSlice from "../MainListSlice/inden";
import PersonSilce from "../PersonSilce";

const persistConfig = {
    key: 'root',
    storage,
    whilelist:['person','allist']
}
const rootReducer = combineReducers({
    person: PersonSilce,
    allist: MainListSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      })
})

export const persistor = persistStore(store)

export default store
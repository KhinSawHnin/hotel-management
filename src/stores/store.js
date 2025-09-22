import storage from "redux-persist/lib/storage"; 
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import authReducer from "../stores/authSlice"
const persistConfig={
    key:"root",
    storage,
}
const rootReducer = combineReducers({
  auth: authReducer,
})

const persistedReducer =persistReducer(persistConfig,rootReducer);

export const store=configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export const persistor =persistStore(store);
export default store;
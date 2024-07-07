import { configureStore } from "@reduxjs/toolkit";
import camperReducer from "./camper/camperSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const favoritesPersistConfig = {
  key: "favorites",
  storage,
  whiteList: ["favorites"],
};

const persistedCamperReducer = persistReducer(
  favoritesPersistConfig,
  camperReducer
);

export const store = configureStore({
  reducer: {
    campers: persistedCamperReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

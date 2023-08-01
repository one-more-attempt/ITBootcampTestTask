import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { modalSliceReducer } from "./reducers/modalSlice";
import { dataSliceReducer } from "./reducers/dataSlice";


const rootReducer = combineReducers({
  modalSliceReducer,
  dataSliceReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type DataStateType = {
  isPaginationEnabled: boolean;
  currentPage: number;
};

const initialState: DataStateType = {
  isPaginationEnabled: false,
  currentPage: 1,
};

export const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    setPagination(state, action: PayloadAction<boolean>) {
      state.isPaginationEnabled = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const dataSliceReducer = dataSlice.reducer;
export const dataSliceActions = dataSlice.actions;
export const { setPagination, setCurrentPage } =
  dataSlice.actions;
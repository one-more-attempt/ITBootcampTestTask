import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ModalStateType = {
  isActive: boolean;
  isPaginationEnabled: boolean;
  name: string;
  status: string;
  species: string;
  gender: string;
  location: string;
  origin: string;
  image: string;
};

const initialState: ModalStateType = {
  isActive: false,
  isPaginationEnabled: false,
  name: "",
  status: "",
  species: "",
  gender: "",
  location: "",
  origin: "",
  image: "",
};

export const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    setModalToActive(
      state,
      action: PayloadAction<Omit<ModalStateType, "isPaginationEnabled">>
    ) {
      state.isActive = action.payload.isActive;
      state.status = action.payload.status;
      state.species = action.payload.species;
      state.gender = action.payload.gender;
      state.location = action.payload.location;
      state.image = action.payload.image;
      state.name = action.payload.name;
      state.origin = action.payload.origin;
    },

    setModalToInitial() {
      return initialState;
    },
  },
});

export const modalSliceReducer = modalSlice.reducer;
export const modalSliceActions = modalSlice.actions;
export const { setModalToActive, setModalToInitial } = modalSlice.actions;

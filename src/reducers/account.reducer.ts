import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TCarState } from "../types/account.type";

const initialState: TCarState = {
  carType: "AUDI",
  carColor: "BLUE",
  code: "",
};

export const carSlice = createSlice({
  name: "car",
  initialState: initialState,
  reducers: {
    updateCarState: (state: TCarState, action: PayloadAction<any>) => {
      let keys = Object.keys(action.payload);
      keys.forEach((key) => {
        state[key as keyof TCarState] = action.payload[key];
      });
    },
  },
});

export const { updateCarState } = carSlice.actions;

export const carState = (state: RootState) => state.TestProjectReducer.car;

export default carSlice.reducer;

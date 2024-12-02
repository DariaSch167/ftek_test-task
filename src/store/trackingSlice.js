import { createSlice } from "@reduxjs/toolkit";
import content from "./content.json";

const cargoSlice = createSlice({
  name: "cargos",
  initialState: content,
  reducers: {
    addCargo: (state, action) => {
      state.push(action.payload);
    },
    updateCargo: (state, action) => {
      const index = state.findIndex((cargo) => cargo.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload.data };
      }
    },
  },
});

export const { addCargo, updateCargo } = cargoSlice.actions;
export default cargoSlice.reducer;

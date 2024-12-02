import { createSlice } from "@reduxjs/toolkit";

const cargoSlice = createSlice({
  name: "cargos",
  initialState: [
    {
      id: "CARGO001",
      name: "Строительные материалы",
      status: "В пути",
      origin: "Москва",
      destination: "Казань",
      departureDate: "2024-11-24",
    },
    {
      id: "CARGO002",
      name: "Хрупкий груз",
      status: "Ожидает отправки",
      origin: "Санкт-Петербург",
      destination: "Екатеринбург",
      departureDate: "2024-11-26",
    },
  ],
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

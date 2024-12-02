import { configureStore } from "@reduxjs/toolkit";
import cargoReducer from "./trackingSlice";

const store = configureStore({
  reducer: {
    cargos: cargoReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../Redux-toolbox/shopSlice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../Redux-toolbox/filterSlice";
import shopReducer from "../Redux-toolbox/shopSlice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    filter: filterReducer,
  },
});

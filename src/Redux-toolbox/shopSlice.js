import { createSlice } from "@reduxjs/toolkit";
import { getIndex, setLocalStorage } from "../Controllers";
import { initialState } from "./shopInitialState";

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
    toggleDescription: (state, { payload }) => {
      const indexOf = getIndex(state.products, payload);
      state.products[indexOf].viewDescription =
        !state.products[indexOf].viewDescription;
    },
    formEvent: (state, { payload }) => {
      state[payload.id] = payload.value;
    },
    changeContentShoppingCart: (state, { payload }) => {
      const indexOf = getIndex(state.products, payload);
      state.products[indexOf].inCart = !state.products[indexOf].inCart;
      if (state.products[indexOf].inCart) {
        state.products[indexOf].quantity = 1;
      }
      setLocalStorage("data", state.products);
    },
    viewShoppingCart: (state) => {
      state.viewShoppingCart = !state.viewShoppingCart;
    },
    decrement: (state, { payload }) => {
      const indexProduct = getIndex(state.products, payload);
      if (indexProduct !== -1) {
        state.products[indexProduct].quantity =
          state.products[indexProduct].quantity - 1;
        if (state.products[indexProduct].quantity === 0) {
          state.products[indexProduct].inCart = false;
        }
      }
      setLocalStorage("data", state.products);
    },
    increment: (state, { payload }) => {
      const indexProduct = getIndex(state.products, payload);
      if (indexProduct !== -1) {
        state.products[indexProduct].quantity =
          state.products[indexProduct].quantity + 1;
      }
      setLocalStorage("data", state.products);
    },
  },
});

export const {
  setProducts,
  toggleDescription,
  formEvent,
  changeContentShoppingCart,
  viewShoppingCart,
  decrement,
  setStoredData,
  increment,
} = shopSlice.actions;

export const selectProducts = (state) => state.shop.products;
export const selectSearchStr = (state) => state.shop.searchStr;
export const selectSelect = (state) => state.shop.select;
export const selectViewShoppingCartStatus = (state) =>
  state.shop.viewShoppingCart;

export default shopSlice.reducer;

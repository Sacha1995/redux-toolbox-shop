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
    formEvent: (state, payload) => {
      state[payload.e.target.id] = payload.e.target.value;
    },
    changeContentShoppingCart: (state, { payload }) => {
      console.log(state);
      const indexOf = getIndex(state.products, payload);
      state.products[indexOf].inCart = !state.products[indexOf].inCart;
      if (state.products[indexOf].inCart) {
        state.products[indexOf].quantity = 1;
      }
      setLocalStorage("data", state);
    },
    viewShoppingCart: (state) => {
      state.products.viewShoppingCard = !state.products.viewShoppingCard;
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
      setLocalStorage("data", state);
    },
    increment: (state, { payload }) => {
      const indexProduct = getIndex(state.products, payload);
      if (indexProduct !== -1) {
        state.products[indexProduct].quantity =
          state.products[indexProduct].quantity + 1;
      }
      setLocalStorage("data", state);
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
  increment,
} = shopSlice.actions;

export const selectProducts = (state) => state.shop.products.products;
export const selectSearchStr = (state) => state.shop.searchStr;
export const selectSelect = (state) => state.shop.select;
export const selectViewShoppingCart = (state) => state.shop.viewShoppingCart;

export default shopSlice.reducer;

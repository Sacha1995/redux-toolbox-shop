import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./shopInitialState";

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    formEvent: (state, { payload }) => {
      state[payload.id] = payload.value;
    },
  },
});

export const { formEvent } = filterSlice.actions;

export const selectSearchStr = (state) => state.filter.searchStr;
export const selectSelect = (state) => state.filter.select;

export default filterSlice.reducer;

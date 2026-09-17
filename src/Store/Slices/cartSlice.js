import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  finalPrice: 0,
};
const cartSlice = createSlice({
  initialState,
  name: "CartSlice",
  reducers: {
    addItem: () => {},
    removeItem: () => {},
    clear: () => {},
  },
});

export const { addItem, removeItem, clear } = cartSlice.actions;
export default cartSlice.reducer;

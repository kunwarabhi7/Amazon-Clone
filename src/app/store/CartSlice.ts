import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { NextState, StoreProduct } from "../../../type";

const initialState: NextState = {
  productData: [],
  favoriteData: [],
  allProducts: [],
  userInfo: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const existingProduct = state.productData.find(
        (item: StoreProduct) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    removeItemFromCart() {},
    increaseQuantity() {},
    decreaseQuantity() {},
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;

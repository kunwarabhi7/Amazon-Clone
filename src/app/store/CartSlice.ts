import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductProps, StoreProduct } from "../../../type";

interface NextState {
  productData: StoreProduct[];
}

const initialState = {
  productData: [],
  favoriteData: [],
  allProducts: [],
  uderInfo: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const existingProduct = state.favoriteData.find(
        (item: StoreProduct) => item.id === action.payload
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

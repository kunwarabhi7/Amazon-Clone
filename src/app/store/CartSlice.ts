import { createSlice } from "@reduxjs/toolkit";
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
        (item: StoreProduct) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity =
          existingProduct.quantity + action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    addToFavorite(state, action) {
      const existingProduct = state.favoriteData.find(
        (item: StoreProduct) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.favoriteData.push(action.payload);
      }
    },
    removeItemFromCart(state, action) {
      state.productData.filter(
        (item: StoreProduct) => item._id !== action.payload._id
      );
    },
    increaseQuantity(state, action) {
      const existingProduct = state.productData.find((item: StoreProduct) => {
        item._id === action.payload._id;
        existingProduct && existingProduct.quantity++;
      });
    },
    decreaseQuantity(state, action) {
      const existingProduct = state.productData.find((item: StoreProduct) => {
        item._id === action.payload._id;
        if (existingProduct?.quantity === 1) {
          state.productData = state.productData.filter(
            (item) => item._id !== action.payload._id
          );
        } else {
          existingProduct!.quantity--;
        }
      });
    },
    resetCart(state) {
      state.productData = [];
    },
    addUser(state, action) {
      state.userInfo = action.payload;
    },
    removeUser(state) {
      state.userInfo = null;
    },
    setAllProducts(state, action) {
      state.allProducts = action.payload;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  increaseQuantity,
  decreaseQuantity,
  addToFavorite,
  resetCart,
  addUser,
  removeUser,
  setAllProducts,
} = cartSlice.actions;
export default cartSlice.reducer;

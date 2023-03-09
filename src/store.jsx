import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/CartSlice";
import productReducer from "./features/ProductSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer
  }
});
